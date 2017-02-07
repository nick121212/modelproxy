module.exports = function(grunt) {
    grunt.config.set('commonjs', {
        options: {
            pathReplace: function(path) {
                return path;
            }
        },
        modules: {
            cwd: 'built/web/',
            src: ['**/*.js'],
            dest: 'built/all/',

        }

    });

    grunt.loadNpmTasks('grunt-wrap-commonjs');
};

// tsc src/index.ts src/engines/default.ts src/engines/mock.ts src/libs/base.factory.ts src/libs/compose.ts src/libs/engine.factory.ts src/libs/interface.factory.ts src/libs/modelproxy.ts src/models/common.ts src/models/engine.ts src/models/interface.ts src/models/method.ts src/models/proxy.config.ts src/schemas/builder.ts src/schemas/index.ts src/schemas/interface.schema.ts src/schemas/proxy.config.schema.ts typings/globals/chai/index.d.ts typings/globals/json-schema/index.d.ts typings/globals/jsonschema/index.d.ts typings/globals/node/index.d.ts typings/index.d.ts typings/mockjs.d.ts typings/modules/bluebird/index.d.ts typings/modules/lodash/index.d.ts typings/modules/tv4/index.d.ts --sourcemap --emitDecoratorMetadata --removeComments --preserveConstEnums --experimentalDecorators --moduleResolution node --lib es5,es2016 --typeRoots "typings/index.d.ts" --target ES5 --module commonjs --out built/node/index.js --outDir built/node/