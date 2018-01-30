'use strict';

var _ = require('lodash'),
    dataHelper = require('../../../helpers/data.js'),
    handlebarsHelper = require('../../../helpers/handlebars.js'),
    defaultData = require('../../data/default.data.js'),

    template = dataHelper.getFileContent('{{name}}.hbs'),
    data = _.merge(defaultData, {
        meta: {
            title: '{{originalName}}',
            className: '{{className}}',
            keyName: '{{keyName}}',
            jira: 'ESTATICO-*',
            documentation: dataHelper.getDocumentation('{{name}}.md')
        },
        props: {}
    }),
    variants = _.mapValues({
        default: {
            meta: {
                title: 'Default',
                desc: 'Default implementation'
            }
        }
    }, function(variant) {
        var variantProps = _.merge({}, data, variant).props,
            compiledVariant = handlebarsHelper.Handlebars.compile(template)(variantProps),
            variantData = _.merge({}, data, variant, {
                meta: {
                    demo: compiledVariant,
                    code: {
                        handlebars: dataHelper.getFormattedHandlebars(template),
                        html: dataHelper.getFormattedHtml(compiledVariant),
                        data: dataHelper.getFormattedJson(variantProps)
                    }
                }
            });

        return variantData;
    });

data.variants = variants;

module.exports = data;
