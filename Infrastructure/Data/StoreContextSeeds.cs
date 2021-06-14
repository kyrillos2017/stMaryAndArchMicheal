using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextSeeds
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {

            try
            {

                // add seed for product brands to db
                // if (!context.ProductBrands.Any())
                // {
                //     //var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                //    // var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                //     // foreach (var item in brands)
                //     // {
                //     //     context.ProductBrands.Add(item);
                //     // }

                // }
                    await context.SaveChangesAsync();

                

            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeeds>();
                logger.LogError(ex.Message);
            }
        }
    }
}