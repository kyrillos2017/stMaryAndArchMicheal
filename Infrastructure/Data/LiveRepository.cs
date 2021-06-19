using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class LiveRepository : ILiveRepository
    {
        private readonly StoreContext _context;


        public LiveRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<Live> CreateOrEdit(bool isActive, string videoId)
        {
            var live = await _context.Live.FirstOrDefaultAsync(x => x.Id == 1);
            if (live == null)
            {
                var newLive = new Live(isActive, videoId);
                await _context.AddAsync(newLive);
                await _context.SaveChangesAsync();
                return newLive;
            }
            else
            {
                if (string.IsNullOrEmpty(videoId))
                {
                    live.IsActive = false;
                }
                else
                {
                    live.IsActive = isActive;
                    live.VideoId = videoId;
                }

                await _context.SaveChangesAsync();

                return live;
            }

        }



        public async Task<Live> GetLive()
        {
            var id = 1;
            var live = await _context.Live.FirstOrDefaultAsync(x => x.Id == id);
            if (live == null) return null;
            return live;

        }
    }
}