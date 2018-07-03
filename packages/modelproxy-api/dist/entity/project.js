"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const tag_1 = require("./tag");
const action_1 = require("./action");
const state_1 = require("./state");
/**
 * 项目类
 */
let ProjectEntity = class ProjectEntity extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        unique: true,
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectEntity.prototype, "key", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ProjectEntity.prototype, "projectName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ProjectEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => tag_1.TagEntity, tag => tag.project),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", Array)
], ProjectEntity.prototype, "tags", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => state_1.StateEntity, state => state.project),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", Array)
], ProjectEntity.prototype, "states", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => action_1.ActionEntity, action => action.project),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", Array)
], ProjectEntity.prototype, "actions", void 0);
ProjectEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], ProjectEntity);
exports.ProjectEntity = ProjectEntity;
//# sourceMappingURL=project.js.map