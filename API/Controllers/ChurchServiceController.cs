using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ChurchServiceController : BaseApiController
    {
        private readonly IGenericRepository<ChurchService> _serviceRepo;
        private readonly IMapper _mapper;

        public ChurchServiceController(
            IGenericRepository<ChurchService> serviceRepo,
            IMapper mapper
        )
        {
            _mapper = mapper;
            _serviceRepo = serviceRepo;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<int>> CreateOrUpdate(ChurchServiceDto serviceDto)
        {
            var service = _mapper.Map<ChurchServiceDto, ChurchService>(serviceDto);
            if (serviceDto.Id == null)
            {
                await _serviceRepo.Add(service);
                await _serviceRepo.Save();
            }
            else
            {
                //Update
                var s = await _serviceRepo.GetByIdAsync((int)serviceDto.Id);
                if (s == null) return BadRequest(new ApiResponse(404));
                _serviceRepo.Update(service);
                await _serviceRepo.Save();

            }
            return service.Id;
        }


        [HttpGet]
        public async Task<IReadOnlyList<ChurchServiceDto>> GetAll()
        {
            var service = await _serviceRepo.ListAllAsync();
            var data = _mapper.Map<IReadOnlyList<ChurchServiceDto>>(service);
            return data;
        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<ChurchServiceDto>> Delete(int id)
        {
            var service = await _serviceRepo.GetByIdAsync(id);
            if (service == null) return BadRequest(new ApiResponse(404));
            _serviceRepo.Delete(service);
            await _serviceRepo.Save();
            var serviceDto = _mapper.Map<ChurchService, ChurchServiceDto>(service);
            return serviceDto;
        }
    }
}