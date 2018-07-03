"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const tag_1 = require("./tag");
const project_1 = require("./project");
let ActionEntity = class ActionEntity extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ActionEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        unique: true,
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ActionEntity.prototype, "key", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ActionEntity.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ActionEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ActionEntity.prototype, "method", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ActionEntity.prototype, "path", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ActionEntity.prototype, "requestSchema", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ActionEntity.prototype, "responseSchema", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => tag_1.TagEntity, (tag) => tag.actions),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", tag_1.TagEntity)
], ActionEntity.prototype, "tag", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => project_1.ProjectEntity, (project) => project.actions),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", project_1.ProjectEntity)
], ActionEntity.prototype, "project", void 0);
ActionEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], ActionEntity);
exports.ActionEntity = ActionEntity;
//# sourceMappingURL=action.js.map