using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Inputs;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<ImageAssets, ImageAssetsDto>()
            .ForMember(d => d.ImgUrl, o => o.MapFrom<ImageAssetsUrlResolver>());

            CreateMap<Live, LiveDto>().ReverseMap();

            CreateMap<Fathers, FathersDto>().ReverseMap();
            CreateMap<CreateFatherInput, Fathers>().ReverseMap();
            CreateMap<CreateFatherInput, FathersDto>().ReverseMap();

            CreateMap<Confessions, ConfessionsDto>().ReverseMap();
            CreateMap<CreateConfessionsInput, Confessions>().ReverseMap();

            CreateMap<SundayMeeting, SundayMeetingDto>().ReverseMap();

            CreateMap<AboutChurch, AboutChurchDto>().ReverseMap();

            CreateMap<ChurchService, ChurchServiceDto>().ReverseMap();
        }
    }
}