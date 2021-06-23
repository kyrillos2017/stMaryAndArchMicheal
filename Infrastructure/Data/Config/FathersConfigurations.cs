using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class FathersConfigurations : IEntityTypeConfiguration<Fathers>
    {
        public void Configure(EntityTypeBuilder<Fathers> builder)
        {
            // builder.OwnsOne(o => o.Confessions, a => a.WithOwner());
            // builder.HasMany(o => o.Confessions).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}