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

        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("wwwroot", "images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    var img = new ImageAssets(fileName, dbPath);
                    await _ImageRepo.Add(img);
                    await _ImageRepo.Save();
                    return Ok(new { img });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }


    }
}
