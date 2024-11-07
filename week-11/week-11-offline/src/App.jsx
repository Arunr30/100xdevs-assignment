import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { homeAtom, notification, jobs, message, totalValueCount } from './atoms'

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
    const jobsValue = useRecoilValue(jobs)
    const [messageAtom, setMessageAtom] = useRecoilState(message)
    const totalValue = useRecoilValue(totalValueCount)

    return (
        <div>
            <button>Home({homeValue})</button>
            <button>Notification({notificationValue})</button>
            <button>Jobs({jobsValue >= 100 ? '100' : jobsValue})</button>
            <button onClick={() => setMessageAtom((c) => c + 1)}>
                Message {messageAtom}
            </button>
            <button>total {totalValue}</button>
        </div>
    )
}
export default App
