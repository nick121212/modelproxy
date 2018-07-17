import { FxUiSchema } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";
import { ComponentEnhancer } from "recompose";

export class SchemaFormOption {

    /**
     * 生成数据
     * @param  {string} key       key
     * @param  {string} field     field
     * @param  {string} widget    widget
     * @return {SchemaFormOption}
     */
    public static build(key: string, field?: string, widget?: string) {
        return new SchemaFormOption(key, field, widget);
    }

    /**
     * 当前的配置数据
     */
    private uiSchema: FxUiSchema = { format: "", key: "" };

    /**
     * @param  {string} key        key
     * @param  {string} field      field
     * @param  {string} widget     widget
     */
    constructor(key: string, field?: string, widget?: string) {
        this.uiSchema = {
            key,
            field,
            widget,
            format: "",
            options: fromJS({})
        };
    }

    /**
     * 设置模板
     * @param  {string[]}           temps 模板
     * @return {SchemaFormOptions} 
     */
    public temps(temps: string[]): SchemaFormOption {
        this.uiSchema.temps = temps;

        return this;
    }

    /**
     * 设置hocs
     * @param  {Array<string | ComponentEnhancer<any, any>>} hocs   hoc列表
     * @return {SchemaFormOptions} 
     */
    public hocs(hocs: Array<string | ComponentEnhancer<any, any>>): SchemaFormOption {
        this.uiSchema.hocs = hocs;

        return this;
    }

    /**
     * 设置参数
     * @param   {string}            field 
     * @param   {string}            key 
     * @param   {any}               options 
     * @returns {SchemaFormOptions}
     */
    public option<T>(field: string, key: string, options: T) {
        const { options: originOptions = fromJS({}) } = this.uiSchema;

        this.uiSchema.options = originOptions.mergeDeep({
            [field]: {
                [key]: options
            }
        });

        return this;
    }

    /**
     * 完成
     * @return {FxUiSchema}
     */
    public done(): FxUiSchema {
        return this.uiSchema;
    }
}
