import { Room, Client } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {
    maxClients = 4;
    state = new MyRoomState();

    onCreate(options: any) {
        this.onMessage("type", (client, message) => {
            console.log(`客户端 ${client.sessionId} 发送了消息: ${message}`);
            this.broadcast("notice", { 
                id: client.sessionId,
                text: message 
            });
        });
        
        this.onMessage("notePressed", (client, message) => {
            this.broadcast("notePressed", { 
                text: message 
            }, {
                except: client
            });
        });
        
        this.onMessage("noteReleased", (client, message) => {
            this.broadcast("noteReleased", { 
                text: message 
            }, {
                except: client
            });
        });
        
        this.onMessage("start_game", (client, message) => {
            this.broadcast("start_game", { 
                text: message 
            });
        });
    }

    onJoin(client: Client, options: any) {
        console.log(client.sessionId, "加入了房间!");
        client.send("welcome_message", {
            text: "Hello User！",
            timestamp: Date.now(),
            server: "Online Server"
        });

        this.broadcast("notice", { JoinId: client.sessionId });
    }

    onLeave(client: Client, consented: boolean) {
        console.log(client.sessionId, "退出!");
        
        this.broadcast("notice", { LeaveId: client.sessionId });
    }

    onDispose() {
        console.log("room", this.roomId, "房间关闭...");
    }
}