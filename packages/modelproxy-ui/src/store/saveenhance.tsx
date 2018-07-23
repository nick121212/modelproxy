import { fromJS, Map } from "immutable";
import pathToRegexp from "path-to-regexp";
import { DeepPartial, Reducer, Store, StoreEnhancer, StoreEnhancerStoreCreator } from "redux";

const getSpecKeysData = (state: Map<string, any>, matchKeys: RegExp[], parentKeys: string[], maxDepth: number) => {
    let result = fromJS({});

    state.mapKeys((k: string, val: Map<string, any>) => {
        const match = matchKeys.some((re: RegExp) => {
            return re.test([...parentKeys, k].join("/"));
        });

        if (match) {
            result = result.setIn([...parentKeys, k], val);
        } else {
            if (Map.isMap(val) && parentKeys.length < maxDepth) {
                result = result.mergeDeep(getSpecKeysData(val, matchKeys, [...parentKeys, k], maxDepth));
            }
        }
    });

    return result;
};

export default (key: string, matchKeys: string[]): StoreEnhancer<any, any> => {
    return (next: StoreEnhancerStoreCreator<any, any>): StoreEnhancerStoreCreator<any, any> => {

        return (reducer: Reducer<any, any>, initialState?: DeepPartial<Map<string, any>>, enhancer?: any): Store<any, any> => {
            if (typeof initialState === "function" && typeof enhancer === "undefined") {
                enhancer = initialState;
                initialState = undefined;
            }

            let maxDepth = 1;
            let persistedState;
            let finalInitialState: DeepPartial<Map<string, any>> | undefined = initialState;

            try {
                persistedState = localStorage.getItem(key);

                if (persistedState && initialState) {
                    persistedState = JSON.parse(persistedState);
                    finalInitialState = (initialState as Map<string, any>).mergeDeep(persistedState || {});
                }
            } catch (e) {
                console.warn('Failed to retrieve initialize state from localStorage:', e)
            }

            const store: Store<any, any> = (next as any)(reducer, finalInitialState || initialState, enhancer);
            const matchs = matchKeys.map((k: string) => {
                maxDepth = maxDepth < k.split("/").length ? k.split("/").length : maxDepth;

                return pathToRegexp(k);
            });

            store.subscribe(() => {
                const state: Map<string, any> = store.getState();

                // console.log(store.getState().toJS())

                try {
                    localStorage.setItem(key, JSON.stringify(getSpecKeysData(state, matchs, [], maxDepth).toJSON()));
                } catch (e) {
                    console.error(e);
                }
            });

            // console.log(store.getState().toJS())

            return store;
        }
    }
};
