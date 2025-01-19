import { CardElement } from "./CardElements";

export function RemoteCard() {
    return <div className="mt-14 sm:w-[80%] w-[90%] bg-[#353971]/60 pb-12 border-[#484C7B] border rounded-2xl">
        <div className="grid sm:grid-cols-2 grid-cols-1 mx-auto">
            <CardElement label="Share multiple screens at the same time" picture="	https://cdn.prod.website-files.com/63c885e8fb810536398b658a/64093308f0c86285bb8728cf_Desktop.svg" />

            <div className="hidden sm:flex">
                <CardElement label="Google Integration" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/6409338426e7bf3949c96183_google.png" />
            </div>

            <CardElement label="Slack Integration" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/64093349a5623b1f14c9a0b0_slack.png" />

            <div className="hidden sm:flex">
                <CardElement label="Outlook Integration" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/64b6f4a7710bba968490792c_icons8-microsoft-outlook-2019-144%201.png" />
            </div>

            <CardElement label="SSO" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/64b6f4b7c767e83e6428f973_shield-check%201.svg" />

            <div className="hidden sm:flex">
                <CardElement label="See when meetings happen in your office" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/6409339226e7bf2e33c96328_Calendar.svg" />
            </div>

            <CardElement label="Virtual backgrounds and background blur" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/6409337698a4d3bcb6a9b156_Blurbg.svg" />

            <div className="hidden sm:flex">
                <CardElement label="Collaborate on shared whiteboards" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/640933a08c781e0e38dd412e_Comments.svg" />
            </div>

            <CardElement label="Premium support (Premium Office plans only)" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/64093356bd5d36786c5d8c4f_Crown.svg" />

            <div className="hidden sm:flex">
                <CardElement label="And more!" picture="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/640933adf54b45c768e8befc_Favorite-filled.svg" />
            </div>

        </div>
    </div>
}