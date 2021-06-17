using System;
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
        private readonly ILiveRepository _liveRepository;
        private readonly IMapper _mapper;
        public LiveController(
            IMapper mapper,
            IUnitOfWork unitOfWork,
            ILiveRepository liveRepository
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
            var live = await _liveRepository.CreateOrEdit(input.IsActive, input.VideoId);
            return _mapper.Map<Live, LiveDto>(live);
        }

        [HttpGet]
        public async Task<ActionResult<LiveDto>> GetCurrentLive()
        {
            var live = await _liveRepository.GetLive();
            return _mapper.Map<Live, LiveDto>(live);
        }

        // private async Task<LiveDto> Create(LiveDto input)
        // {

        //     var live = await _liveRepository.CreateOrEdit(input.VideoId, input.IsActive);
        //     return _mapper.Map<Live, LiveDto>(live);

        //     // if(string.IsNullOrEmpty(input.VideoId)){
        //     //     input.IsActive = false;
        //     // }
        //     // var live = _mapper.Map<LiveDto, Live>(input);
        //     // _unitOfWork.Repository<Live>().Add(live);
        //     // var result = await _unitOfWork.Complete();
        //     // if (result <= 0) return null;

        //     // return live;
        //     //return _mapper.Map<Live, LiveDto>(live);
        //     //return await _bannerRepository.InsertAndGetIdAsync(point);
        // }
    }
}