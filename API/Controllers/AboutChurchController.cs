using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities;
using Core.Inputs;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AboutChurchController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<AboutChurch> _churchRepository;
        public AboutChurchController(
            IMapper mapper,
        IGenericRepository<AboutChurch> churchRepository
        )
        {
            _mapper = mapper;
            _churchRepository = churchRepository;
        }

        [HttpPost]
        public async Task<ActionResult<AboutChurchDto>> CreateOrEdit(CreateAboutChurch input)
        {
            var spec = new AboutChurchWithImageSpecification();
            var about = await _churchRepository.GetEntityWithSpec(spec);
            var inputMapper = _mapper.Map<CreateAboutChurch, AboutChurch>(input);
            if (about == null)
            {
                await _churchRepository.Add(inputMapper);
                await _churchRepository.Save();

            }
            else
            {
                // about.BannerId = input.BannerId;
                _churchRepository.Update(inputMapper);
                await _churchRepository.Save();
            }

            return _mapper.Map<CreateAboutChurch, AboutChurchDto>(input);
        }

        [HttpGet]
        public async Task<ActionResult<AboutChurchDto>> Get()
        {
            var about = await _churchRepository.GetByIdAsync(1);
            if (about == null)
            {
                return new AboutChurchDto();
            }
            else
            {
                return _mapper.Map<AboutChurch, AboutChurchDto>(about);
            }
        }
    }
}