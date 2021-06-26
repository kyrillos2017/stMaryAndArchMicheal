using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Inputs;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ConfessionController : BaseApiController
    {
        private readonly IGenericRepository<Confessions> _confessionRepo;
        private readonly IMapper _mapper;
        public ConfessionController(
        IGenericRepository<Confessions> confessionRepo,
        IMapper mapper
        )
        {
            _mapper = mapper;
            _confessionRepo = confessionRepo;
        }

        [HttpPost]
        public async Task<ActionResult<ConfessionsDto>> CreateOrUpdate(CreateConfessionsInput input)
        {
            var conf = _mapper.Map<CreateConfessionsInput, Confessions>(input);
            if (input.Id == null)
            {
                await _confessionRepo.Add(conf);
                await _confessionRepo.Save();
            }
            else
            {
                //Update
                var s = await _confessionRepo.GetByIdAsync((int)input.Id);
                if (s == null) return BadRequest(new ApiResponse(404));
                _confessionRepo.Update(conf);
                await _confessionRepo.Save();

            }
            var result = _mapper.Map<Confessions, ConfessionsDto>(conf);
            return result;
        }

        [HttpGet]
        public async Task<IReadOnlyList<ConfessionsDto>> GetAll()
        {

            //var spec = new ConfessionsGroupByDaySpecifications();
            //var conf = await _confessionRepo.GroupListAsync(spec);

            var conf = await _confessionRepo.ListAllAsync();

            var data = _mapper.Map<IReadOnlyList<ConfessionsDto>>(conf);
            return data;
            ;
        }

        [HttpDelete]
        public async Task<ActionResult<ConfessionsDto>> Delete(int id)
        {
            var conf = await _confessionRepo.GetByIdAsync(id);
            if (conf == null) return BadRequest(new ApiResponse(404));
            _confessionRepo.Delete(conf);
            await _confessionRepo.Save();
            var confDto = _mapper.Map<Confessions, ConfessionsDto>(conf);
            return confDto;
        }

    }
}