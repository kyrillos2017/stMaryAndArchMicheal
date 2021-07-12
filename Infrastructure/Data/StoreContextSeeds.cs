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

                var folderName = Path.Combine("wwwroot", "images");
                var folderAssetsName = Path.Combine("wwwroot", "imageSeeds");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (!context.ImageAssets.Any())
                {
                    var currentImages = Directory.GetFiles(folderName);
                    var imageSeeds = Directory.GetFiles(folderAssetsName);
                    foreach (var item in imageSeeds)
                    {
                        var title = item.Split("wwwroot\\imageSeeds\\")[1];
                        var img = new ImageAssets(title, item);
                        context.Add(img);
                    }
                    foreach (var item in currentImages)
                    {
                        var path = Path.Combine(Directory.GetCurrentDirectory(), item);

                        if (System.IO.File.Exists(path))
                        {
                            System.IO.File.Delete(path);
                        }
                    }
                }

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