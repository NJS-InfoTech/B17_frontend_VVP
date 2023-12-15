using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class DummyModel : PageModel
{
    public populatetable Data { get; set; }
    // Public property to hold the hardcoded text
    public string HardcodedText { get; set; }

    public DummyModel(ILogger<DummyModel> logger)
    {
        // Initialize the hardcoded text
        HardcodedText = "Assembly";
    }
    public class populatetable
    {
        public string Jo_Number { get; set; }
        public DateTime Jo_SchedStartDate { get; set; }
        public DateTime Jo_SchedCompletionDate { get; set; }
        public string Item_s { get; set; }
        public int Current_Qty { get; set; }
        public int Total_Qty { get; set; }
        public string Cata_log { get; set; }
        public string Customer_ { get; set; }
        public DateTime So_SchedShipDate { get; set; }
        public string Notes_ { get; set; }
        public string Completed_By { get; set; }
        public string StartedBy_ { get; set; }
        public string TaktTime_ { get; set; }
    }

    public void OnGet()
    {
       Data = new populatetable
        {
           Jo_Number = "91725275",
           Jo_SchedStartDate = DateTime.Parse("05/03/2021"),
           Jo_SchedCompletionDate = DateTime.Parse("05/03/2021"),
           Item_s = "VISTA RACK-1464142",
           Current_Qty = 1,
           Total_Qty = 1,
           Cata_log = "36091-A0C5L1NVOP1STDS6-S136",
           Customer_ = "S&C ELECTRIC CANADA LTD.",
           So_SchedShipDate = DateTime.Parse("05/21/2021"),
           Notes_ = "999991 (06/12/2023 04:53:19)",
           Completed_By = "838:59:59",
           StartedBy_ = "HARDCODED_USER", // Replace with the actual value
           TaktTime_ = "838:59:59"

        };
    }
}

