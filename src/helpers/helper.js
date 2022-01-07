export const isWalletAddress = () => {
    const walletAddress = localStorage.getItem('WALLET_ADDRESS')
    if(walletAddress !== null){
        return true
    }else{
        return false
    }
}