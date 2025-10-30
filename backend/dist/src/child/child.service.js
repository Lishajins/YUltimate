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
exports.ChildService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const child_entity_1 = require("./entities/child.entity");
let ChildService = class ChildService {
    childRepo;
    constructor(childRepo) {
        this.childRepo = childRepo;
    }
    async create(data) {
        const child = this.childRepo.create(data);
        return this.childRepo.save(child);
    }
    async findAll() {
        return this.childRepo.find({ relations: ['attendances', 'assessments'] });
    }
    async findOne(id) {
        return this.childRepo.findOne({
            where: { id },
            relations: ['attendances', 'assessments'],
        });
    }
};
exports.ChildService = ChildService;
exports.ChildService = ChildService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(child_entity_1.Child)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChildService);
//# sourceMappingURL=child.service.js.map