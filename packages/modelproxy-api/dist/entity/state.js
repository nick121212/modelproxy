"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const project_1 = require("./project");
let StateEntity = class StateEntity extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], StateEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], StateEntity.prototype, "stateName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], StateEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], StateEntity.prototype, "stateUri", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => project_1.ProjectEntity, (project) => project.states),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", project_1.ProjectEntity)
], StateEntity.prototype, "project", void 0);
StateEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], StateEntity);
exports.StateEntity = StateEntity;
//# sourceMappingURL=state.js.map