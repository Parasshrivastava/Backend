class ApiResponse{
    constructor(statuscode,data,message="SUCCESS")
    {
        this.statuscode=statuscode
        this.data=data
        this.message=message
        this.success=statuscode<400


    }
}



// information response 100-199
// sucessful response 200-299
// Redirection mess 300-399
// client errroe 400-499
// server error  500-599