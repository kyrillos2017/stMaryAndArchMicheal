using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Inputs;
using Core.Interfaces;
using Core.Specifications;
using Core.Specifications.Params;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class FathersController : BaseApiController
    {
        private readonly IGenericRepository<Fathers> _fathersRepo;
        private readonly IMapper _mapper;
        public FathersController(
        IGenericRepository<Fathers> fathersRepo,
        IMapper mapper
        )
        {
            _fathersRepo = fathersRepo;
            _mapper = mapper;
        }


        [HttpPost]
        public async Task<ActionResult<int>> CreateOrUpdate(CreateFatherInput fatherDto)
        {
            var father = _mapper.Map<CreateFatherInput, Fathers>(fatherDto);
            if (fatherDto.Id == null)
            {
                await _fathersRepo.Add(father);
                await _fathersRepo.Save();
            }
            else
            {
                //Update
                var s = await _fathersRepo.GetByIdAsync((int)fatherDto.Id);
                if (s == null) return BadRequest(new ApiResponse(404));
                _fathersRepo.Update(father);
                await _fathersRepo.Save();

            }
            return father.Id;
        }


        [HttpGet]
        public async Task<ActionResult<Pagination<FathersDto>>> GetAll([FromQuery] FathersParams fathersParams)
        {
            var spec = new FathersSpecificationsWithConfessions(fathersParams);
            var countSpec = new FathersCountSpecifications(fathersParams);
            var totalItems = await _fathersRepo.CountAsync(countSpec);

            var fathers = await _fathersRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<FathersDto>>(fathers);
            return Ok(
                new Pagination<FathersDto>(fathersParams.PageSize, fathersParams.PageIndex, totalItems, data)
            );
            ;
        }

        [HttpDelete]
        public async Task<ActionResult<FathersDto>> Delete(int id)
        {
            var father = await _fathersRepo.GetByIdAsync(id);
            if (father == null) return BadRequest(new ApiResponse(404));
            _fathersRepo.Delete(father);
            await _fathersRepo.Save();
            var fatherDto = _mapper.Map<Fathers, FathersDto>(father);
            return fatherDto;
        }


    }
}