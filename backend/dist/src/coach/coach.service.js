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
exports.CoachService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const coach_entity_1 = require("./entities/coach.entity");
let CoachService = class CoachService {
    coachRepository;
    constructor(coachRepository) {
        this.coachRepository = coachRepository;
    }
    async findAll() {
        return this.coachRepository.find();
    }
    async findOne(id) {
        return this.coachRepository.findOneBy({ id });
    }
    async create(coach) {
        return this.coachRepository.save(coach);
    }
    async update(id, coach) {
        await this.coachRepository.update(id, coach);
        return (await this.coachRepository.findOneBy({ id }));
    }
    async remove(id) {
        await this.coachRepository.delete(id);
    }
};
exports.CoachService = CoachService;
exports.CoachService = CoachService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(coach_entity_1.Coach)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CoachService);
//# sourceMappingURL=coach.service.js.map