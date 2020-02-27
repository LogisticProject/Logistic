using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using LogiApi.Models;

namespace LogiApi.Controllers
{
    [RoutePrefix("Api/Providers")]
    public class ProvidersController : ApiController
    {
        private logistic1Entities db = new logistic1Entities();

        [HttpGet]
        [Route("AllProviders")]
        public IQueryable<Provider> GetProviders()
        {
            return db.Providers;
        }

        [HttpGet]
        [Route("GetProviderDetails/{userId}")]
        [ResponseType(typeof(Provider))]
        public IHttpActionResult GetProvider(int userId)
        {
            Provider provider = db.Providers.Where(p => p.UserID == userId).FirstOrDefault();

            if (provider == null)
            {
                return NotFound();
            }

            return Ok(provider);
        }

        [HttpGet]
        [Route("GetProviderById/{providerId}")]
        [ResponseType(typeof(Provider))]
        public IHttpActionResult GetProviderById(int providerId)
        {
            Provider provider = db.Providers.Find(providerId);

            if (provider == null)
            {
                return NotFound();
            }

            return Ok(provider);
        }

        [HttpPut]
        [Route("UpdateProvider")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProvider(Provider provider)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(provider).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProviderExists(provider.ProviderID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Providers
        [ResponseType(typeof(Provider))]
        public IHttpActionResult PostProvider(Provider provider)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Providers.Add(provider);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ProviderExists(provider.ProviderID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = provider.ProviderID }, provider);
        }

        [HttpDelete]
        [Route("DeleteProvider")]
        [ResponseType(typeof(Provider))]
        public IHttpActionResult DeleteProvider(int id)
        {
            Provider provider = db.Providers.Find(id);
            if (provider == null)
            {
                return NotFound();
            }

            db.Providers.Remove(provider);
            db.SaveChanges();

            return Ok(provider);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProviderExists(int id)
        {
            return db.Providers.Count(e => e.ProviderID == id) > 0;
        }
    }
}