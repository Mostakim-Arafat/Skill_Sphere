import { authClient } from "@/lib/auth-client"



const SessionData = async() => {
    const { data: session } = await authClient.getSession()
    console.log(session)
    return (
        <div>
            
        </div>
    );
};

export default SessionData;