let saveDataOutput;
$( document ).ready(function(){
    fetch('./Other/autosave.save').then(response => response.json()).then( data=> {saveDataOutput = data; getSaveData(data);});
    document.getElementById('upload').addEventListener('change', handleFileSelect, false);
    
    }
);
function handleFileSelect(e) {
    let files = e.target.files;
    let f = files[0];
    let reader = new FileReader();

    reader.onload = (function(File){
        return function(e) {
            saveDataOutput = JSON.parse(e.target.result);
            getSaveData(saveDataOutput);
        }
    })(f);
    reader.readAsText(f);
}
function writeFileOut(data) {
    let file = new File([JSON.stringify(data)], 'autosave.save', {type:'text/plain'});
    const link = document.createElement('a');
    const url = URL.createObjectURL(file);

    link.href = url;
    link.download = file.name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

}
function getSaveData(data) {

    $('#save\\.m_ID').val(data.m_ID);
        //m_TimeData
        $('#save\\.m_TimeData\\.m_Date').val(data.m_Date);
        $('#save\\.m_TimeData\\.m_TimePlayed').val(data.m_TimePlayed);
        //m_Difficulty
        $('#save\\.m_Difficulty\\.m_Difficulty').val(data.m_Difficulty.m_Difficulty).change();
        $('#save\\.m_Difficulty\\.m_DifficultyChanged').val(data.m_Difficulty.m_DifficultyChange);
        $('#save\\.m_Difficulty\\.m_ButcherGangStatus').val(data.m_Difficulty.m_ButcherGangStatus).change();
        $('#save\\.m_Difficulty\\.m_isNotSocialite').val(data.m_Difficulty.m_isNotSocialite);
        //m_PlayerData
        $('#save\\.m_PlayerData\\.m_Transform\\.m_Position\\.X').val(data.m_PlayerData.m_Transform.m_Position.x);
        $('#save\\.m_PlayerData\\.m_Transform\\.m_Position\\.Y').val(data.m_PlayerData.m_Transform.m_Position.y);
        $('#save\\.m_PlayerData\\.m_Transform\\.m_Position\\.Z').val(data.m_PlayerData.m_Transform.m_Position.z);
        $('#save\\.m_PlayerData\\.m_Transform\\.m_Rotation').val(data.m_PlayerData.m_Transform.m_Rotation);
        $('#save\\.m_PlayerData\\.m_Transform\\.m_HeadRotation').val(data.m_PlayerData.m_Transform.m_HeadRotation);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Health').val(data.m_PlayerData.m_Statistics.m_Health);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Life').val(data.m_PlayerData.m_Statistics.m_Life);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_iLife').val(data.m_PlayerData.m_Statistics.m_ILife);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Cooldown').val(data.m_PlayerData.m_Statistics.m_Cooldown);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Food').val(data.m_PlayerData.m_Statistics.m_Food);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Slugs').val(data.m_PlayerData.m_Statistics.m_Slugs);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Cards').val(data.m_PlayerData.m_Statistics.m_Cards);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Toolkits').val(data.m_PlayerData.m_Statistics.m_Toolkits);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Parts').val(data.m_PlayerData.m_Statistics.m_Parts);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_BatteryCasings').val(data.m_PlayerData.m_Statistics.m_BatteryCasings);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Batteries').val(data.m_PlayerData.m_Statistics.m_Batteries);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_DepositedBatteries').val(data.m_PlayerData.m_Statistics.m_DepositedBatteries);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_IsCrouched').val(data.m_PlayerData.m_Statistics.m_IsCrouched);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_UpgradeLevelHealth').val(data.m_PlayerData.m_Statistics.m_UpgradeLevelHealth);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_UpgradeLevelStamina').val(data.m_PlayerData.m_Statistics.m_UpgradeLevelStamina);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_UpgradeLevelAbility').val(data.m_PlayerData.m_Statistics.m_UpgradeLevelAbility);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_Kills').val(data.m_PlayerData.m_Statistics.m_Kills);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_ShockKills').val(data.m_PlayerData.m_Statistics.m_ShockKills);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_BanishKill').val(data.m_PlayerData.m_Statistics.m_BanishKill);
        $('#save\\.m_PlayerData\\.m_Statistics\\.m_CombatStatus').val(data.m_PlayerData.m_Statistics.m_CombatStatus);
        //playerdata - weapon and abilities
        $('#save\\.m_PlayerData\\.m_WeaponData\\.m_WeaponStatus').val(data.m_PlayerData.m_WeaponData.m_WeaponStatus);
        $('#save\\.m_PlayerData\\.m_WeaponData\\.m_WeaponID').val(data.m_PlayerData.m_WeaponData.m_WeaponID);
        $('#save\\.m_PlayerData\\.m_WeaponData\\.m_Power').val(data.m_PlayerData.m_WeaponData.m_Power);
        $('#save\\.m_PlayerData\\.m_AbilityDirectory\\.m_AbilityStatus').val(data.m_PlayerData.m_AbilityDirectory.m_AbilityStatus);
        //change this so it 
        for (var i = 0; i < data.m_PlayerData.m_AbilityDirectory.m_Keys.length; i++) {
            $('#save\\.m_PlayerData\\.m_AbilityDirectory\\.m_Values'+i).prop("checked", true);
        }
    $('#save\\.m_CursorState').val(data.m_CursorState);
}
function setSaveData(data) {
    
}
