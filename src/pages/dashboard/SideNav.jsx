import { Link, NavLink } from "react-router-dom";
import ImageUploader from "../../components/common/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { showSignoutModal } from "../../redux/slice/modalSlice";

const SideNav = () => {
    const { userProfilePicture } = useSelector((state) => state.profileSet)
    const { lastChatList, updateMessage } = useSelector((state) => state.chatInfo)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(showSignoutModal(true))
    }

    return (
        <div className="h-screen sticky top-0">
            <div className="h-full py-9">
                <nav className="w-[186px] h-full">
                    <div className="h-full py-10 overflow-x-scroll bg-app-primary rounded-[20px] flex flex-col justify-between">
                        {/* profile picture */}
                        <div className="relative">
                            <div className="relative">
                                <div className=" relative z-10 peer group/profile w-[100px] h-[100px] mx-auto overflow-hidden rounded-full">
                                    <img src={userProfilePicture?.md} alt="Profile Picture" />

                                    {/* <div className="border-[6px] rounded-full border-white/50 absolute inset-0"></div> */}
                                    <ImageUploader className={'hidden group-hover/profile:block'}/>
                                </div>
                                <div className="absolute inset-0 -inset-y-[25px] peer-hover:scale-[.85] peer-hover:rotate-45 transition-all duration-300">
                                    <svg className="w-[145px] h-[150px] mx-auto text-white/60" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" stroke="" transform="rotate(90)"><path d="M62.94629,57.28943a3.99943,3.99943,0,0,1,0,5.65625,91.96656,91.96656,0,0,0-23.82617,41.23437,3.99973,3.99973,0,0,1-7.729-2.0625A99.96717,99.96717,0,0,1,57.28906,57.28943,3.99972,3.99972,0,0,1,62.94629,57.28943ZM39.13477,151.81189a4,4,0,0,0-7.72754,2.07031A99.97758,99.97758,0,0,0,57.28076,198.725a3.99992,3.99992,0,1,0,5.65137-5.66211A91.96542,91.96542,0,0,1,39.13477,151.81189ZM151.812,216.8822a91.98417,91.98417,0,0,1-47.62353-.0166,3.99956,3.99956,0,1,0-2.07032,7.72656,99.96511,99.96511,0,0,0,51.77149.01465,3.99957,3.99957,0,1,0-2.07764-7.72461Zm69.96436-67.8955a4.00061,4.00061,0,0,0-4.89649,2.833,91.9607,91.9607,0,0,1-23.82617,41.23438,3.99975,3.99975,0,1,0,5.65674,5.65625,99.9623,99.9623,0,0,0,25.89844-44.82813A3.999,3.999,0,0,0,221.77637,148.9867Zm-4.91114-44.79786a4,4,0,0,0,7.72754-2.07031,99.962,99.962,0,0,0-25.87353-44.84277,3.99992,3.99992,0,1,0-5.65137,5.66211A91.955,91.955,0,0,1,216.86523,104.18884ZM104.188,39.11755a91.98417,91.98417,0,0,1,47.62353.01661,3.99957,3.99957,0,1,0,2.07032-7.72657,99.95168,99.95168,0,0,0-51.77149-.01464,3.99956,3.99956,0,1,0,2.07764,7.7246Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* menu list */}
                        <div className="flex flex-col py-4 pt-20 gap-9 overflow-x-scroll">
                            {/* home icon */}
                            <NavLink 
                                to='/'
                                className={`relative group`}
                            >
                            {({isActive}) => (
                                <><div className={`w-11 py-5 z-10 mx-auto relative ${isActive ? 'text-app-primary' : 'group-hover:text-app-primary text-white/70'}`}>
                                    <svg viewBox="0 0 47 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.3207 0L46.199 19.9519L43.7566 22.3943L40.2822 19.2433V41.6926L38.5622 43.4126H28.2423L26.5223 41.6926V29.6527H19.6423V41.6926L17.9223 43.4126H7.60236L5.88237 41.6926V19.2708L2.44239 22.3943L0 19.9519L21.8439 0H24.3207ZM9.32236 16.1438V39.9726H16.2023V27.9327L17.9223 26.2127H28.2423L29.9623 27.9327V39.9726H36.8422V16.1232L23.0823 3.64638L9.32236 16.1438Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="absolute z-0 inset-0 left-6 rounded-s-[16px] bg-white">
                                    <div className={`bg-app-primary h-full ${isActive ? 'w-2 shadow-[-2px_0px_10px_#acacac]' : 'w-full group-hover:w-2'} transition-all ease ms-auto rounded-s-[14px]`}></div>
                                </div></>
                            )}
                            </NavLink>

                            {/* message icon */}
                            <NavLink 
                                to={`/messages`}
                                className={`relative group`}
                            >
                                {({isActive}) => (
                                    <Link to={`/messages/${lastChatList.length === 0 ? 'createchat' : `${lastChatList[0]?.chatType === 'single' ? 'to': lastChatList[0]?.chatType === 'group' ? 'with' : ''}/${lastChatList[0]?.userId}`}`}>
                                        <><div className={`w-11 my-5 z-10 mx-auto relative ${isActive ? 'text-app-primary' : 'group-hover:text-app-primary text-white/70'}`}>
                                            <svg viewBox="0 0 54 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M43.1284 6.76724C39.3726 2.9813 34.4156 0.62631 29.1119 0.108287C23.8083 -0.409736 18.4903 0.941668 14.0749 3.92952C9.6595 6.91736 6.42333 11.3544 4.92432 16.4757C3.42531 21.597 3.75741 27.0816 5.86335 31.984C6.08285 32.4396 6.15487 32.9525 6.06936 33.4511L4.05504 43.1481C3.97743 43.5199 3.99328 43.9052 4.10115 44.2693C4.20903 44.6334 4.40556 44.965 4.67307 45.2342C4.89237 45.4523 5.15347 45.6236 5.44065 45.7378C5.72783 45.8521 6.03514 45.9069 6.34404 45.899H6.80185L16.5988 43.9275C17.0967 43.8676 17.6017 43.9387 18.0638 44.1339C22.9588 46.243 28.4352 46.5755 33.5489 45.0743C38.6625 43.573 43.093 40.332 46.0763 35.91C49.0597 31.488 50.4091 26.1621 49.8919 20.8505C49.3746 15.5389 47.0232 10.5745 43.2429 6.81309L43.1284 6.76724ZM17.7891 25.2672C17.3364 25.2672 16.8938 25.1327 16.5174 24.8808C16.141 24.6289 15.8476 24.2709 15.6743 23.852C15.5011 23.4331 15.4557 22.9722 15.5441 22.5275C15.6324 22.0828 15.8504 21.6743 16.1705 21.3537C16.4906 21.0331 16.8985 20.8148 17.3425 20.7263C17.7865 20.6379 18.2468 20.6833 18.6651 20.8568C19.0833 21.0303 19.4408 21.3241 19.6923 21.7011C19.9438 22.0781 20.0781 22.5213 20.0781 22.9747C20.0781 23.5827 19.8369 24.1658 19.4077 24.5957C18.9784 25.0256 18.3962 25.2672 17.7891 25.2672ZM26.9451 25.2672C26.4924 25.2672 26.0498 25.1327 25.6734 24.8808C25.297 24.6289 25.0036 24.2709 24.8304 23.852C24.6571 23.4331 24.6118 22.9722 24.7001 22.5275C24.7884 22.0828 25.0064 21.6743 25.3265 21.3537C25.6467 21.0331 26.0545 20.8148 26.4986 20.7263C26.9426 20.6379 27.4028 20.6833 27.8211 20.8568C28.2393 21.0303 28.5968 21.3241 28.8484 21.7011C29.0999 22.0781 29.2341 22.5213 29.2341 22.9747C29.2341 23.5827 28.993 24.1658 28.5637 24.5957C28.1344 25.0256 27.5522 25.2672 26.9451 25.2672ZM36.1012 25.2672C35.6484 25.2672 35.2059 25.1327 34.8294 24.8808C34.453 24.6289 34.1596 24.2709 33.9864 23.852C33.8131 23.4331 33.7678 22.9722 33.8561 22.5275C33.9444 22.0828 34.1625 21.6743 34.4826 21.3537C34.8027 21.0331 35.2106 20.8148 35.6546 20.7263C36.0986 20.6379 36.5589 20.6833 36.9771 20.8568C37.3954 21.0303 37.7529 21.3241 38.0044 21.7011C38.2559 22.0781 38.3902 22.5213 38.3902 22.9747C38.3902 23.5827 38.149 24.1658 37.7197 24.5957C37.2905 25.0256 36.7082 25.2672 36.1012 25.2672Z" fill="currentColor"/>
                                            </svg>
                                            {updateMessage !== 0 && <span className="grid place-content-center absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white">{updateMessage}</span>}
                                        </div>
                                        <div className="absolute z-0 inset-0 left-6 rounded-s-[16px] bg-white">
                                            <div className={`bg-app-primary h-full ${isActive ? 'w-2 shadow-[-2px_0px_10px_#acacac]' : 'w-full group-hover:w-2'} transition-all ease ms-auto rounded-s-[14px]`}></div>
                                        </div></>
                                    </Link>
                                )}
                            </NavLink>

                            {/* notification icon */}
                            <NavLink 
                                to='/notification'
                                className={`relative group`}
                            >
                            {({isActive}) => (
                                <><div className={`w-11 py-5 z-10 mx-auto relative ${isActive ? 'text-app-primary' : 'group-hover:text-app-primary text-white/70'}`}>
                                    <svg viewBox="0 0 47 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45.6719 40.3931C44.1769 39.0604 42.8681 37.5325 41.7806 35.8507C40.5934 33.5292 39.8819 30.994 39.6877 28.3938V20.7353C39.698 16.6512 38.2165 12.7039 35.5217 9.63508C32.8268 6.56626 29.104 4.58713 25.0529 4.06954V2.06965C25.0529 1.52075 24.8348 0.994322 24.4467 0.606187C24.0585 0.218052 23.5321 0 22.9832 0C22.4343 0 21.9079 0.218052 21.5198 0.606187C21.1316 0.994322 20.9136 1.52075 20.9136 2.06965V4.10055C16.8987 4.65544 13.2209 6.64654 10.5615 9.70505C7.90202 12.7636 6.44108 16.6822 6.44925 20.7353V28.3938C6.25509 30.994 5.54353 33.5292 4.35635 35.8507C3.28801 37.5287 2.00019 39.0563 0.527103 40.3931C0.361734 40.5384 0.229199 40.7172 0.138314 40.9177C0.0474291 41.1182 0.000278738 41.3357 0 41.5558V43.6642C0 44.0754 0.163335 44.4697 0.454073 44.7605C0.744811 45.0512 1.13914 45.2145 1.5503 45.2145H44.6487C45.0598 45.2145 45.4542 45.0512 45.7449 44.7605C46.0356 44.4697 46.199 44.0754 46.199 43.6642V41.5558C46.1987 41.3357 46.1516 41.1182 46.0607 40.9177C45.9698 40.7172 45.8372 40.5384 45.6719 40.3931ZM3.22463 42.1139C4.66704 40.7205 5.93703 39.1591 7.00736 37.463C8.5028 34.6593 9.37534 31.5657 9.56536 28.3938V20.7353C9.50388 18.9184 9.80864 17.1077 10.4615 15.411C11.1144 13.7144 12.102 12.1664 13.3655 10.8594C14.6291 9.55237 16.1427 8.51296 17.8163 7.80309C19.49 7.09322 21.2893 6.72739 23.1072 6.72739C24.9252 6.72739 26.7245 7.09322 28.3981 7.80309C30.0718 8.51296 31.5854 9.55237 32.849 10.8594C34.1125 12.1664 35.1001 13.7144 35.753 15.411C36.4058 17.1077 36.7106 18.9184 36.6491 20.7353V28.3938C36.8391 31.5657 37.7117 34.6593 39.2071 37.463C40.2775 39.1591 41.5474 40.7205 42.9899 42.1139H3.22463Z" fill="currentColor"/>
                                        <path d="M23.177 50.3925C24.1536 50.37 25.0908 50.0029 25.8228 49.356C26.5548 48.7092 27.0344 47.8243 27.1768 46.8578H19.0222C19.1687 47.8505 19.6707 48.7562 20.435 49.4064C21.1993 50.0566 22.1737 50.407 23.177 50.3925Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="absolute z-0 inset-0 left-6 rounded-s-[16px] bg-white ">
                                    <div className={`bg-app-primary h-full ${isActive ? 'w-2 shadow-[-2px_0px_10px_#acacac]' : 'w-full group-hover:w-2'} transition-all ease ms-auto rounded-s-[14px]`}></div>
                                </div></>
                            )}
                            </NavLink>

                            {/* setting icon */}
                            <NavLink 
                                to='/setting'
                                className={`relative group`}
                            >
                            {({isActive}) => (
                                <><div className={`w-11 py-5 z-10 mx-auto relative ${isActive ? 'text-app-primary' : 'group-hover:text-app-primary text-white/70'}`}>
                                    <svg viewBox="0 0 46 46" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.4794 4.19778e-06C26.1555 4.19778e-06 26.7604 0.420899 26.9881 1.05109L28.6119 5.55214C29.1937 5.69704 29.6928 5.84193 30.116 5.99373C30.5783 6.15933 31.174 6.41003 31.9099 6.75272L35.691 4.75175C35.9996 4.58823 36.353 4.52921 36.698 4.58354C37.043 4.63786 37.3611 4.8026 37.6045 5.05304L40.9302 8.4915C41.3718 8.94919 41.496 9.61849 41.2476 10.2027L39.4744 14.3587C39.7688 14.8992 40.0034 15.3615 40.1828 15.7479C40.376 16.1688 40.6151 16.7484 40.9003 17.4959L45.0333 19.2669C45.6543 19.5314 46.0384 20.1524 45.997 20.8171L45.6934 25.5895C45.6726 25.8995 45.5613 26.1967 45.3732 26.444C45.1852 26.6914 44.9286 26.8781 44.6354 26.981L40.7209 28.3725C40.6082 28.913 40.4909 29.3752 40.3668 29.7662C40.1664 30.3701 39.9377 30.9641 39.6814 31.5464L41.6478 35.8934C41.7866 36.1988 41.824 36.5406 41.7544 36.8688C41.6849 37.197 41.5121 37.4943 41.2614 37.7172L37.5217 41.0568C37.2755 41.2758 36.9681 41.4143 36.6409 41.4538C36.3137 41.4932 35.9823 41.4318 35.691 41.2776L31.8363 39.2352C31.2333 39.5546 30.6111 39.8364 29.9734 40.0793L28.2899 40.7095L26.7949 44.8495C26.6841 45.1526 26.4843 45.4152 26.2216 45.6028C25.9589 45.7904 25.6457 45.8942 25.323 45.9005L20.9531 45.9994C20.6218 46.0081 20.296 45.9139 20.0205 45.7298C19.7449 45.5457 19.5332 45.2807 19.4145 44.9714L17.6527 40.3093C17.0516 40.1039 16.4565 39.8815 15.868 39.6423C15.3867 39.434 14.9126 39.2092 14.4466 38.9684L10.0768 40.836C9.78886 40.9588 9.47143 40.9953 9.16313 40.941C8.85484 40.8867 8.56898 40.744 8.34036 40.5301L5.10667 37.4964C4.86591 37.2716 4.70196 36.9767 4.63798 36.6535C4.57401 36.3303 4.61326 35.9952 4.75018 35.6956L6.62922 31.6016C6.37932 31.1167 6.14763 30.6226 5.93464 30.1204C5.68602 29.5057 5.45593 28.8837 5.24466 28.2552L1.12781 27.0017C0.793169 26.9005 0.501295 26.6917 0.297511 26.4077C0.0937278 26.1236 -0.0105596 25.7802 0.00084515 25.4308L0.16184 21.0125C0.173299 20.7243 0.26335 20.4446 0.422255 20.2038C0.581159 19.963 0.80287 19.7703 1.06341 19.6464L5.38266 17.5718C5.58275 16.8381 5.75755 16.2677 5.91164 15.8514C6.12862 15.2954 6.36957 14.749 6.63382 14.2138L4.76168 10.2579C4.61961 9.95746 4.57646 9.61973 4.63845 9.29324C4.70044 8.96675 4.86437 8.66833 5.10667 8.4409L8.33576 5.39114C8.56212 5.17764 8.84535 5.0341 9.15137 4.97779C9.45739 4.92148 9.77317 4.9548 10.0607 5.07374L14.4259 6.87692C14.9089 6.55492 15.3459 6.29503 15.7415 6.08573C16.213 5.83503 16.8432 5.57284 17.6366 5.28994L19.1546 1.05569C19.2668 0.745813 19.4719 0.478125 19.742 0.289182C20.012 0.100239 20.3338 -0.000750368 20.6633 4.19778e-06H25.4794ZM24.3524 3.16707H21.7926L20.4011 7.06322C20.3193 7.2904 20.187 7.49603 20.014 7.66456C19.8411 7.8331 19.6322 7.96015 19.403 8.03611C18.4002 8.3696 17.6757 8.6571 17.2526 8.8802C16.8041 9.11709 16.2314 9.47819 15.5506 9.96118C15.3278 10.1176 15.0691 10.2151 14.7985 10.2449C14.5279 10.2747 14.2542 10.2356 14.0028 10.1314L9.79391 8.3949L8.15406 9.94508L9.86291 13.556C10.0699 13.993 10.0653 14.499 9.84911 14.9291C9.38912 15.8514 9.07863 16.5322 8.92224 16.9508C8.76584 17.3671 8.55655 18.0824 8.30126 19.0714C8.24347 19.2955 8.13736 19.5043 7.99036 19.6831C7.84336 19.8619 7.65902 20.0063 7.45029 20.1064L3.33343 22.082L3.25063 24.336L6.9765 25.4676C7.47099 25.6171 7.86197 25.9966 8.02527 26.4842C8.39326 27.5882 8.68764 28.4024 8.89924 28.913C9.1796 29.5609 9.48965 30.1956 9.82841 30.815C10.0607 31.2474 10.0768 31.7626 9.8721 32.2088L8.14486 35.9762L9.78011 37.5125L13.8786 35.76C14.0993 35.6656 14.3383 35.6216 14.5782 35.6312C14.8181 35.6407 15.0529 35.7036 15.2654 35.8152C16.1049 36.2568 16.7305 36.5627 17.1261 36.7306C17.5285 36.8985 18.299 37.1791 19.4168 37.5608C19.6387 37.6366 19.8411 37.7604 20.0097 37.9234C20.1782 38.0864 20.3088 38.2846 20.3919 38.5038L22.0203 42.8071L24.15 42.7611L25.5231 38.9569C25.6016 38.7399 25.7264 38.5425 25.8888 38.3784C26.0513 38.2144 26.2474 38.0877 26.4637 38.007L28.8487 37.1147C29.4513 36.8916 30.1827 36.5397 31.036 36.0567C31.2721 35.924 31.5378 35.8528 31.8087 35.8496C32.0796 35.8463 32.3469 35.9112 32.5861 36.0383L36.2131 37.9587L38.2531 36.1395L36.4684 32.1996C36.3767 31.9974 36.3291 31.7779 36.3287 31.5559C36.3283 31.3338 36.3751 31.1142 36.4661 30.9116C36.8847 29.9755 37.1676 29.2694 37.3102 28.8187C37.4505 28.3771 37.5953 27.74 37.7356 26.9212C37.7839 26.6431 37.9054 26.3828 38.0878 26.1674C38.2701 25.9519 38.5066 25.7889 38.7729 25.6953L42.5632 24.3498L42.7288 21.7278L39.0029 20.1317C38.8045 20.0472 38.6254 19.9233 38.4763 19.7676C38.3273 19.6118 38.2114 19.4274 38.1358 19.2255C37.8701 18.4923 37.5802 17.7682 37.2665 17.0543C36.9694 16.4327 36.6472 15.8235 36.3005 15.2281C36.1804 15.0178 36.1106 14.7825 36.0966 14.5407C36.0827 14.2989 36.1249 14.0571 36.22 13.8343L37.8874 9.92438L36.1303 8.10741L32.708 9.91978C32.4846 10.0383 32.2365 10.1027 31.9836 10.1079C31.7308 10.1131 31.4803 10.0589 31.2522 9.94968C30.5258 9.58851 29.7828 9.26155 29.0258 8.9699C28.3804 8.75312 27.7221 8.57646 27.0548 8.4409C26.79 8.38476 26.5439 8.26222 26.3395 8.08479C26.1351 7.90736 25.9792 7.68087 25.8864 7.42661L24.3501 3.16477L24.3524 3.16707ZM23.0552 12.9741C28.6556 12.9741 33.1979 17.466 33.1979 23.0043C33.1979 28.5427 28.6556 33.0322 23.0552 33.0322C17.4526 33.0322 12.9126 28.5427 12.9126 23.0043C12.9126 17.466 17.4526 12.9764 23.0552 12.9764V12.9741ZM23.0552 16.1435C19.2213 16.1435 16.1141 19.214 16.1141 23.0043C16.1141 26.7947 19.2213 29.8674 23.0552 29.8674C26.8869 29.8674 29.9941 26.7947 29.9941 23.0043C29.9941 19.214 26.8892 16.1435 23.0552 16.1435Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="absolute z-0 inset-0 left-6 rounded-s-[16px] bg-white ">
                                    <div className={`bg-app-primary h-full ${isActive ? 'w-2 shadow-[-2px_0px_10px_#acacac]' : 'w-full group-hover:w-2'} transition-all ease ms-auto rounded-s-[14px]`}></div>
                                </div></>
                            )}
                            </NavLink>
                        </div>

                        {/* signout button */}
                        <div className="flex-1 flex flex-col justify-end items-center pt-4">
                            <button 
                                onClick={handleSignOut}
                                className="w-12 text-white transform transition-all hover:scale-105"
                            >
                                <svg className="drop-shadow-2xl" viewBox="0 0 54 58" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.8 30.6667V24.5333H25.4667V18.4H40.8V12.2667L50 21.4667L40.8 30.6667ZM37.7333 27.6V39.8667H22.4V49.0667L4 39.8667V0H37.7333V15.3333H34.6667V3.06667H10.1333L22.4 9.2V36.8H34.6667V27.6H37.7333Z" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default SideNav;