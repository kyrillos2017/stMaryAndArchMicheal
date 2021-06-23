using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Inputs;

namespace Core.Interfaces
{
    public interface IFathersRepository
    {
        // Task<Fathers> CreateOrEditAsync(CreateFatherInput father);
        Task<IReadOnlyList<Fathers>> GetAllAsync();
        Task<Fathers> GetById(int id);
    }
}