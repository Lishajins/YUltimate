"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const child_entity_1 = require("./child/entities/child.entity");
const attendance_entity_1 = require("./attendance/attendance.entity");
const assessment_entity_1 = require("./assessment/assessment.entity");
const child_module_1 = require("./child/child.module");
const attendance_module_1 = require("./attendance/attendance.module");
const assessment_module_1 = require("./assessment/assessment.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database.sqlite',
                entities: [child_entity_1.Child, attendance_entity_1.Attendance, assessment_entity_1.Assessment],
                synchronize: true,
            }),
            child_module_1.ChildModule,
            attendance_module_1.AttendanceModule,
            assessment_module_1.AssessmentModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map