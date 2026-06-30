export async function GET(request) {
    return Response.json(
        "Get request received"
    );
}

export async function POST(request){
    return Response.json(
        "Post request received"
    );
}