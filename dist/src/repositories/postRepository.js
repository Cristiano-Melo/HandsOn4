"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepository = void 0;
const Post_1 = require("./../entities/Post");
const data_source_1 = require("./../data-source");
exports.postRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
