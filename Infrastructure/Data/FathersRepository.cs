using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Inputs;
using Core.Interfaces;

namespace Infrastructure.Data
{
    public class FathersRepository : IFathersRepository
    {
        private readonly StoreContext _context;
        public FathersRepository(
            StoreContext context

            )
        {
            _context = context;
        }

        



        // public async Task<Fathers> CreateOrEditAsync(CreateFatherInput input)
        // {
        //     if (input.Id == null)
        //     {
        //         return await Create(input);
        //     }
        //     else
        //     {
        //         return await Update(input);
        //     }
        // }

        private async Task<Fathers> Create(Fathers input)
        {

            var res = await _context.Fathers.AddAsync(input);
            // var point = ObjectMapper.Map<Banner>(input);
            // return await _bannerRepository.InsertAndGetIdAsync(point);
            return input;
        }
        private async Task<Fathers> Update(CreateFatherInput input)
        {
            // var banner = await _bannerRepository.FirstOrDefaultAsync((long)input.Id);
            // ObjectMapper.Map(input, banner);
            // return banner.Id;
            return null;
        }

        public Task<IReadOnlyList<Fathers>> GetAllAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<Fathers> GetById(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}