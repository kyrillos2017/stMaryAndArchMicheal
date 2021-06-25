using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class LiveController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<Live> _liveRepository;
        private readonly IMapper _mapper;
        public LiveController(
            IMapper mapper,
            IUnitOfWork unitOfWork,
            IGenericRepository<Live> liveRepository
        )
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _liveRepository = liveRepository;
        }

        [HttpPost]
        public async Task<ActionResult<LiveDto>> CreateOrEdit(LiveDto input)
        {
            if (string.IsNullOrEmpty(input.VideoId))
            {
                input.IsActive = false;
            }
            var live = _mapper.Map<LiveDto, Live>(input);
            var data = await _liveRepository.Add(live);
            await _liveRepository.Save();
            return _mapper.Map<Live, LiveDto>(data);
        }

        [HttpGet]
        public async Task<ActionResult<LiveDto>> GetCurrentLive()
        {
            var live = await _liveRepository.GetByIdAsync(1);
            if (live == null)
            {
                return new LiveDto();
            }
            else
            {
                return _mapper.Map<Live, LiveDto>(live);
            }
        }

    }
}