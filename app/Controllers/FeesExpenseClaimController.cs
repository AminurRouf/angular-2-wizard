using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FeesExpensesClaimForm.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace FeesExpensesClaimForm.Controllers
{
    [Produces("application/json")]
    [Route("api/FeesExpenseClaim")]
    public class FeesExpenseClaimController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody] FeesExpensesClaim feesExpensesClaim)
        {
            string msg = string.Format("Dear {0} : The following values have been saved in the database : email - {1} , is first job - {2} ",
                feesExpensesClaim.PersonalInfo.Name, feesExpensesClaim.PersonalInfo.Email, feesExpensesClaim.TaxDeclaration.IsFirstJob);
            JObject jsJObject = new JObject { { "message", msg } };

      

            return Ok(jsJObject.ToString());
        }
    }
}
