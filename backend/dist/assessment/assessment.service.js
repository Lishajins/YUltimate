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
exports.AssessmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const assessment_entity_1 = require("./assessment.entity");
const child_entity_1 = require("../child/entities/child.entity");
let AssessmentService = class AssessmentService {
    assessmentRepo;
    childRepo;
    constructor(assessmentRepo, childRepo) {
        this.assessmentRepo = assessmentRepo;
        this.childRepo = childRepo;
    }
    async create(data) {
        const child = await this.childRepo.findOneBy({ id: data.childId });
        if (!child)
            throw new Error('Child not found');
        const assessment = this.assessmentRepo.create({
            subject: data.subject,
            score: data.score,
            child,
        });
        return this.assessmentRepo.save(assessment);
    }
    async findAll() {
        return this.assessmentRepo.find({ relations: ['child'] });
    }
};
exports.AssessmentService = AssessmentService;
exports.AssessmentService = AssessmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assessment_entity_1.Assessment)),
    __param(1, (0, typeorm_1.InjectRepository)(child_entity_1.Child)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AssessmentService);
//# sourceMappingURL=assessment.service.js.map