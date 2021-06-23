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
            CreateMap<Live, LiveDto>().ReverseMap();
            CreateMap<Fathers, FathersDto>().ReverseMap();
            CreateMap<CreateFatherInput, Fathers > ().ReverseMap();
        }
    }
}