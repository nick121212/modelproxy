"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const project_1 = require("./project");
const action_1 = require("./action");
/**
 * 标签
 */
let TagEntity = class TagEntity extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], TagEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], TagEntity.prototype, "tagName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], TagEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => project_1.ProjectEntity, (project) => project.tags),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", project_1.ProjectEntity)
], TagEntity.prototype, "project", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => action_1.ActionEntity, action => action.tag),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", Array)
], TagEntity.prototype, "actions", void 0);
TagEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], TagEntity);
exports.TagEntity = TagEntity;
//# sourceMappingURL=tag.js.map