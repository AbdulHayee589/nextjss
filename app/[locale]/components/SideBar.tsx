

import square from "../../../public/square.png"
import text from "../../../public/text.png"
import Image from 'next/image';
import { MdOutlineDashboard } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbTicket } from "react-icons/tb";
import { TbMessageChatbot } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { TiBriefcase } from "react-icons/ti";
import { BsBoxes } from "react-icons/bs";
import { PiFactory } from "react-icons/pi";
import { TbArrowMoveDown } from "react-icons/tb";
import { TbArrowMoveUp } from "react-icons/tb";
import Button from '@mui/joy/Button';
import { CiRepeat } from "react-icons/ci";
import { FaRegFileLines } from "react-icons/fa6";
import { TbFileInvoice } from "react-icons/tb";
import { TbBuildingBank } from "react-icons/tb";
import { SlWrench } from "react-icons/sl";
import { TbDeviceGamepad } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import useMediaQuery from '@mui/material/useMediaQuery';

import {useTranslations} from 'next-intl';
interface SideBarProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function SideBar  ({ setPage }: SideBarProps){

  const t = useTranslations('Index');



  return (
    <div style={{ minWidth: "230px" }}>
  <div className="flex">
    <Image src={square} alt="logo text" height={25} />{" "}
    <Image src={text} alt="logo text" height={25} />
  </div>

  <div className="mt-4">
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center">
      <MdOutlineDashboard className="h-6 w-6 mr-2" />
      {t('home')}
    </Button>
  </div>

  <div className="mt-4 flex flex-col">
    <p className="text-left text-lime font-light text-gray-300">{t('Teamwork')}</p>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <CiCalendarDate className="h-6 w-6 mr-2" />
      {t('Calender')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <HiOutlineClipboardList className="h-6 w-6 mr-2" />
      {t('Tasks')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TbTicket className="h-6 w-6 mr-2" />
      {t('Tickets')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TbMessageChatbot className="h-6 w-6 mr-2" />
      {t('Chat')}
    </Button>
  </div>

  <div className="mt-4 flex flex-col">
    <p className="text-left text-lime font-light text-gray-300">{t('Company')}</p>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TbUsers className="h-6 w-6 mr-2" />
      {t('Team')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <PiUsersThreeDuotone className="h-6 w-6 mr-2" />
      {t('Customer')} (B2C)
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TiBriefcase className="h-6 w-6 mr-2" />
      {t('Partners')} (B2B)
    </Button>
  </div>

  <div className="mt-4 flex flex-col">
    <p className="text-left text-lime font-light text-gray-300">{t('Stock')}</p>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <BsBoxes className="h-6 w-6 mr-2" />
      {t('Inventory')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <PiFactory className="h-6 w-6 mr-2" />
      {t('Manufacturing')} (B2C)
    </Button>
  </div>

  <div className="mt-4 flex flex-col">
    <p className="text-left text-lime font-light text-gray-300">{t('Commerce')}</p>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TbArrowMoveDown className="h-6 w-6 mr-2" />
      {t('Buying')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TbArrowMoveUp className="h-6 w-6 mr-2" />
      {t('Selling')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <CiRepeat className="h-6 w-6 mr-2" />
      {t('Renting')}
    </Button>
  </div>

  <div className="mt-4 flex flex-col">
    <p className="text-left text-lime font-light text-gray-300">{t('Finance')}</p>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TbFileInvoice className="h-6 w-6 mr-2" />
      {t('Invoicing')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <FaRegFileLines className="h-6 w-6 mr-2" />
      {t('Filing')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TbBuildingBank className="h-6 w-6 mr-2" />
      {t('Bank')}
    </Button>
  </div>

  <div className="mt-4 flex flex-col">
    <p className="text-left text-lime font-light text-gray-300">{t('Repair')}</p>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <SlWrench className="h-6 w-6 mr-2" />
      {t('Cases')}
    </Button>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center mt-1">
      <TbDeviceGamepad className="h-6 w-6 mr-2" />
      {t('Devices')}
    </Button>
  </div>

  <div className="mt-4 flex flex-col">
    <p className="text-left text-lime font-light text-gray-300">{t('System')}</p>
    <Button variant="solid" style={{ color: "black" }} className="px-4 py-2 flex items-center">
      <CiSettings className="h-6 w-6 mr-2" />
      {t('Settings')}
    </Button>
  </div>
</div>
  )
}

