using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface ILiveRepository
    {
        Task<Live> CreateOrEdit(bool isActive, string videoId);
        Task<Live> GetLive();
    }
}