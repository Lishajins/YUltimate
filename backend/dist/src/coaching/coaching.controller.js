"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachingController = void 0;
const common_1 = require("@nestjs/common");
const coaching_service_1 = require("./coaching.service");
const coaching_dto_1 = require("./dto/coaching.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let CoachingController = class CoachingController {
    constructor(coachingService) {
        this.coachingService = coachingService;
    }
    createChild(createChildDto, req) {
        return this.coachingService.createChild(createChildDto, req.user.userId);
    }
    getChildren(req) {
        return this.coachingService.getChildren(req.user.userId);
    }
    createSession(createSessionDto, req) {
        return this.coachingService.createSession(createSessionDto, req.user.userId);
    }
    getSessions(req) {
        return this.coachingService.getSessions(req.user.userId);
    }
    markAttendance(markAttendanceDto) {
        return this.coachingService.markAttendance(markAttendanceDto);
    }
    createAssessment(createAssessmentDto) {
        return this.coachingService.createAssessment(createAssessmentDto);
    }
    getAssessments(childId) {
        return this.coachingService.getAssessments(childId);
    }
    createHomeVisit(createHomeVisitDto, req) {
        return this.coachingService.createHomeVisit(createHomeVisitDto, req.user.userId);
    }
    getHomeVisits(req) {
        return this.coachingService.getHomeVisits(req.user.userId);
    }
    getReports(req) {
        return this.coachingService.getReports(req.user.userId);
    }
};
exports.CoachingController = CoachingController;
__decorate([
    (0, common_1.Post)('children'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coaching_dto_1.CreateChildDto, Object]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "createChild", null);
__decorate([
    (0, common_1.Get)('children'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "getChildren", null);
__decorate([
    (0, common_1.Post)('sessions'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coaching_dto_1.CreateSessionDto, Object]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "createSession", null);
__decorate([
    (0, common_1.Get)('sessions'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "getSessions", null);
__decorate([
    (0, common_1.Post)('attendance'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coaching_dto_1.MarkAttendanceDto]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "markAttendance", null);
__decorate([
    (0, common_1.Post)('assessments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coaching_dto_1.CreateAssessmentDto]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "createAssessment", null);
__decorate([
    (0, common_1.Get)('assessments/:childId'),
    __param(0, (0, common_1.Param)('childId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "getAssessments", null);
__decorate([
    (0, common_1.Post)('home-visits'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coaching_dto_1.CreateHomeVisitDto, Object]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "createHomeVisit", null);
__decorate([
    (0, common_1.Get)('home-visits'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "getHomeVisits", null);
__decorate([
    (0, common_1.Get)('reports'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoachingController.prototype, "getReports", null);
exports.CoachingController = CoachingController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('coaching'),
    __metadata("design:paramtypes", [coaching_service_1.CoachingService])
], CoachingController);
//# sourceMappingURL=coaching.controller.js.map