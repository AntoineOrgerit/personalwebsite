/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

const { override } = require('customize-cra');
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': [
        "'self'",
        "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='",
        "'sha256-PW3IrjGlgjZRfI1qWJjbTFU4f0SFG0u+FQBX5X9iUrc='",
        "'sha256-DOu86drLfwUr1Wcsx/wxfqAogK7tFvJGjVmF/300H/M='"
    ],
    'base-uri': "'self'",
    'object-src': "'none'",
    'script-src': ["'self'"],
    'style-src': [
        "'self'",
        "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='",
        "'sha256-PW3IrjGlgjZRfI1qWJjbTFU4f0SFG0u+FQBX5X9iUrc='",
        "'sha256-DOu86drLfwUr1Wcsx/wxfqAogK7tFvJGjVmF/300H/M='"
    ]
};

function addCspHtmlWebpackPlugin(config) {
    if (process.env.NODE_ENV === 'production') {
        config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
    }

    return config;
}

module.exports = {
    webpack: override(addCspHtmlWebpackPlugin),
};