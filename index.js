
console.log("")
console.log("██████╗ ██╗   ██╗██╗      █████╗ ███╗   ██╗███████╗    ██╗      ██████╗ ██████╗ ██████╗ ██╗   ██╗    ██████╗  ██████╗ ████████╗")
console.log("██╔══██╗╚██╗ ██╔╝██║     ██╔══██╗████╗  ██║██╔════╝    ██║     ██╔═══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔═══██╗╚══██╔══╝")
console.log("██║  ██║ ╚████╔╝ ██║     ███████║██╔██╗ ██║███████╗    ██║     ██║   ██║██████╔╝██████╔╝ ╚████╔╝     ██████╔╝██║   ██║   ██║   ")
console.log("██║  ██║  ╚██╔╝  ██║     ██╔══██║██║╚██╗██║╚════██║    ██║     ██║   ██║██╔══██╗██╔══██╗  ╚██╔╝      ██╔══██╗██║   ██║   ██║   ")
console.log("██████╔╝   ██║   ███████╗██║  ██║██║ ╚████║███████║    ███████╗╚██████╔╝██████╔╝██████╔╝   ██║       ██████╔╝╚██████╔╝   ██║   ")
console.log("╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝    ╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝    ╚═╝       ╚═════╝  ╚═════╝    ╚═╝   ")
console.log("aka complete pasta of aqua plays lobby but with more features.")
console.log("                                                                                                                                                                                           ")

const EGClient = require('epicgames-client').Client;
const Fortnite = require('epicgames-fortnite-client');
const { ESubGame } = Fortnite;
let eg = new EGClient({ 
  email: "dylans@bot.com1",
  password: "dylans@bot.com1",
  debug: console.log,
  });
  eg.init().then(async (success) => {
    console.log("Client startup successful")
    if(!success)
      throw new Error('Cannot initialize EpicGames launcher.');
    if(!await eg.login())
      throw new Error('Cannot login on EpicGames account.');
      const fortnite = await eg.runGame(Fortnite, {
        netCL: '7681591',
        partyBuildId: '1:1:7681591', // partyBuildId
  });
  console.log("Parsed partyBuildId and netCL")
  console.log("Setting EGClient subgame to BattleRoyale")
    const br = await fortnite.runSubGame(ESubGame.BattleRoyale);
    console.log("Set EGClient subgame to BattleRoyale")
    fortnite.communicator.on('party:member:joined', async (member) => {
      console.log("Parsing invite join request")
      console.log(`Member#${member.id} joined!`);
      console.log(`Members count: ${fortnite.party.members.length}`);
      console.log(`Setting client party outfits to Member#${member.id}`)
      fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_028_Athena_Commando_F.CID_028_Athena_Commando_F");
      fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/BID_138_Celestial.BID_138_Celestial");
      fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_Breakboy.EID_Breakboy");
      fortnite.party.me.setBattlePass(true, 999999, 999999, 999999);
    });

    console.log("-------------------------------------------------------------------------------------------------------")   
    console.log("██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗ ███████╗")
    console.log("██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝")
    console.log("██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║███████╗")
    console.log("██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║╚════██║")
    console.log("╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝███████║")
    console.log(" ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝")
   console.log(" ")  
   console.log("unreleased1 - unreleased skin #1")       
   console.log("unreleased2 - unreleased skin #2")      
   console.log("recon - recon expert")       
   console.log("renegade - renegade raider") 
   console.log("wonder - wonder skin")   
   console.log("aerial - aerial assault trooper")     
   console.log("codename - codename elf")  
   console.log("ghoul - ghoul trooper ")
   console.log("knight - black knight")   
   console.log(" ")  
   console.log("Emotes ")  
   console.log("pointout - point it out ")  
   console.log(" ")  
   console.log(" ")  
   console.log("Pickaxes")  
   console.log("raiderrevenge - raiders revenge")
   console.log("-------------------------------------------------------------------------------------------------------")                                       
   console.log(" ")  
   console.log(" ")  
   console.log(" ")  
   console.log(" ")  
  
  // point it out
   // EID_IceKing

    

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "raiderrevenge"){
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/Pickaxe_Lockjaw.Pickaxe_Lockjaw");      }     
    });

    // CID_030_Athena_Commando_M_Halloween
    // SK_M_Med_Soldier_04

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "skull"){
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_030_Athena_Commando_M_Halloween.SK_M_Med_Soldier_04");
      }     
    });

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "recon"){
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_022_Athena_Commando_F.CID_022_Athena_Commando_F");
      }     
    });

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "knight"){
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_035_Athena_Commando_M_Medieval.CID_035_Athena_Commando_M_Medieval");
      }     
    });

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "ghoul"){
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_029_Athena_Commando_F_Halloween.CID_029_Athena_Commando_F_Halloween");
      }     
    });

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "renegade"){
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_028_Athena_Commando_F.CID_028_Athena_Commando_F");
      }     
    });

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "aerial"){
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_017_Athena_Commando_M.CID_017_Athena_Commando_M");
      }     
    });

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "codename"){
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_051_Athena_Commando_M_HolidayElf.CID_051_Athena_Commando_M_HolidayElf");
      }     
    });

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "unreleased2"){
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_509_Athena_Commando_M_WiseMaster.CID_509_Athena_Commando_M_WiseMaster");
      }     
    });

    fortnite.communicator.on('friend:message', async (data) => {
      var args = data.message.split(" ");
      if (args[0] == "pointout"){
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing");      }     
    });

   // CID_434_Athena_Commando_F_StealthHonor
   // CID_477_Athena_Commando_F_SpaceSuit

   
   fortnite.communicator.on('friend:message', async (data) => {
    var args = data.message.split(" ");
    if (args[0] == "wonder"){
      fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_434_Athena_Commando_F_StealthHonor.CID_434_Athena_Commando_F_StealthHonor");
    }     
  });

  fortnite.communicator.on('friend:message', async (data) => {
    var args = data.message.split(" ");
    if (args[0] == "unreleased1"){
      fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_477_Athena_Commando_F_SpaceSuit.CID_477_Athena_Commando_F_SpaceSuit");
    }     
  });

    fortnite.communicator.on('party:invitation', async (invitation) => { 
      console.log("Party invitation found")
      current_party = invitation.party;
      await invitation.accept()
      console.log("Party invitation accepted")
    });
    fortnite.communicator.on('friend:request', async (friendops) => {
        console.log("Recieved friend request from " + friendops.friend.id)
        eg.acceptFriendRequest(friendops.friend.id) 
        console.log("Sucessfully accepted " + friendops.friend.id + " friend request")
    });
    });
