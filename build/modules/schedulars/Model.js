'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SchedularsSchema = new _mongoose.Schema({
	task: {
		type: String
	},
	jobs: [{
		userId: {
			type: String
		},
		time: {
			type: String
		},
		pending: {
			type: Boolean,
			default: true
		},
		note: {
			type: String
		}
	}]
}); /* **************************************************************************
     * Copyright(C) Mega Trade Website, Inc - All Rights Reserved
     * Unauthorized copying of this file, via any medium is strictly prohibited
     * Proprietary and confidential
     * Written by Abdeen Mohamed < abdeen.mohamed@outlook.com>, September 2019
     ************************************************************************** */

exports.default = _mongoose2.default.model('schedulars', SchedularsSchema);