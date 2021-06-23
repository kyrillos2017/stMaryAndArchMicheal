using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Inputs;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
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
        public async Task<int> CreateOrUpdate(CreateFatherInput fatherDto)
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
                _fathersRepo.Update(father);
                await _fathersRepo.Save();
              
            }
            return father.Id;
        }

    }
}