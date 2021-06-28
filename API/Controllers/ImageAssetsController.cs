using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Core.Inputs;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using API.Errors;

namespace API.Controllers
{
    public class ImageAssetsController : BaseApiController
    {
        private readonly IWebHostEnvironment _environment;
        private readonly IGenericRepository<ImageAssets> _ImageRepo;
        private readonly IMapper _mapper;
        public ImageAssetsController(
        IGenericRepository<ImageAssets> ImageRepo,
        IMapper mapper
        )
        {
            _ImageRepo = ImageRepo;
            _mapper = mapper;
        }
        [HttpPost]
        public async Task<ActionResult<int>> CreateOrUpdate(CreateImageInput imgDto)
        {
            var image = _mapper.Map<CreateImageInput, ImageAssets>(imgDto);
            if (imgDto.Id == null)
            {
                imgDto.ImgUrl = SaveImage();
                await _ImageRepo.Add(image);
                await _ImageRepo.Save();
            }
            else
            {
                //Update
                imgDto.ImgUrl = SaveImage();
                var s = await _ImageRepo.GetByIdAsync((int)imgDto.Id);
                if (s == null) return BadRequest(new ApiResponse(404));
                _ImageRepo.Update(image);
                await _ImageRepo.Save();

            }
            return image.Id;
        }


        private string SaveImage()
        {

            string FolderName = "Images/";

            var newFileName = string.Empty;

            if (HttpContext.Request.Form.Files != null)
            {
                var fileName = string.Empty;
                string PathDB = string.Empty;

                var files = HttpContext.Request.Form.Files;

                foreach (var file in files)
                {
                    if (file.Length > 0)
                    {
                        //Getting FileName
                        fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');

                        //Assigning Unique Filename (Guid)
                        var myUniqueFileName = DateTime.Now.Ticks.ToString();

                        //Getting file Extension
                        var FileExtension = Path.GetExtension(fileName);

                        // concating  FileName + FileExtension
                        newFileName = myUniqueFileName + FileExtension;

                        // Combines two strings into a path.
                        fileName = Path.Combine(_environment.WebRootPath, FolderName) + $@"\{newFileName}";

                        // if you want to store path of folder in database
                        PathDB = FolderName + newFileName;

                        using (FileStream fs = System.IO.File.Create(fileName))
                        {
                            file.CopyTo(fs);
                            fs.Flush();
                        }

                        return PathDB;
                    }
                    else
                    {
                        return "";
                    }
                }
            }
            else
            {
                return "";
            }

            return "";
        }

    }
}
