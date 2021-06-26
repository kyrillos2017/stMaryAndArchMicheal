using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
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
        public async Task<ActionResult<AboutChurchDto>> CreateOrEdit(AboutChurchDto input)
        {
            var about = await _churchRepository.GetLastAsync();
            if (about == null)
            {
                var inputMapper = _mapper.Map<AboutChurchDto, AboutChurch>(input);
                var data = await _churchRepository.Add(inputMapper);
                await _churchRepository.Save();

                return _mapper.Map<AboutChurch, AboutChurchDto>(data);
            }
            else
            {
                about.IsActive = input.IsActive;
                about.Description = input.Description;
                about.BannerImgUrl = input.BannerImgUrl;
                about.ImgUrl = input.ImgUrl;

                _churchRepository.Update(about);
                await _churchRepository.Save();
                return _mapper.Map<AboutChurch, AboutChurchDto>(about);
            }
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