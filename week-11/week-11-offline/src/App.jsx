import { RecoilRoot, useRecoilValue } from 'recoil'
import { homeAtom, notification } from './atoms'

const App = () => {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    )
}
const MainApp = () => {
    const homeValue = useRecoilValue(homeAtom)
    const notificationValue = useRecoilValue(notification)

    return (
        <div>
            <button>Home({homeValue})</button>
            <button>Notification({notificationValue})</button>
            <button>Jobs()</button>
            <button>Message()</button>
        </div>
    )
}
export default App
