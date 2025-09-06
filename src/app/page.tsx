"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Copy } from "lucide-react";
import Image from "next/image";

interface Achievement {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "PancakeSwap",
    description: "Cumulative trading volume of at least $1,000",
    completed: true,
  },
  {
    id: "2",
    title: "Four.meme",
    description: "Internal trading volume of at least $50",
    completed: true,
  },
  {
    id: "3",
    title: "BNB Chain balance",
    description: "exceeding 0.05 BNB",
    completed: true,
  },
  {
    id: "4",
    title: "Holding more than 150 TST tokens",
    description: "",
    completed: true,
  },
  {
    id: "5",
    title: "Holding more than 200 Mubarak tokens",
    description: "",
    completed: true,
  },
  {
    id: "6",
    title: "Pump.fun",
    description: "Internal trading volume of at least $50",
    completed: true,
  },
  {
    id: "7",
    title: "Holding more than 1 Trump token",
    description: "",
    completed: true,
  },
  {
    id: "8",
    title: "Cumulative historical trading volume on Raydium",
    description: "is greater than $5,000",
    completed: true,
  },
  {
    id: "9",
    title: "Holding more than 1,550,000 PEPE tokens",
    description: "",
    completed: true,
  },
];

export default function JagerHunterPage() {
  return (
    <div className="min-h-screen bg-[url('/images/back.png')] bg-cover bg-center bg-no-repeat">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="">
        <header className=" relative z-50">
          <div className="flex  md:flex-row items-center justify-between w-full gap-x-4 md:px-8 px-4 py-4">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <Image
                src="/icons/logo.webp"
                alt="Logo"
                width={100}
                height={100}
                className="cursor-pointer w-28 md:w-48 h-auto"
              />
            </div>

            <nav className="hidden md:flex  gap-2 items-center justify-center flex-1">
              <Image
                src="/images/menu-airdrop.webp"
                alt="Airdrop"
                width={220}
                height={200}
                className="w-20 md:w-24 h-auto object-contain hover:scale-105 transition-transform"
              />
              <Image
                src="/images/menu-token.webp"
                alt="Tokenomics"
                width={200}
                height={20}
                className="w-20 md:w-24 h-auto object-contain animate-caret-b hover:scale-105 transition-transform"
              />
              <Image
                src="/images/menu-rewards.webp"
                alt="Rewards"
                width={120}
                height={120}
                className="w-20 md:w-24 h-auto object-contain animate-caret-b hover:scale-105 transition-transform"
              />
              <Image
                src="/images/menu-liquidation.webp"
                alt="Liquidation"
                width={120}
                height={120}
                className="w-20 md:w-24 h-auto object-contain animate-caret-b hover:scale-105 transition-transform"
              />
              <Image
                src="/images/menu-swap.webp"
                alt="Swap"
                width={120}
                height={120}
                className="w-20 md:w-24 h-auto object-contain animate-caret-b hover:scale-105 transition-transform"
              />
            </nav>

            {/* Connect Wallet Button */}
            <div>
              <Button className=" retro-button border-2 bg-[#FF8801] hover:bg-orange-600 text-white flex flex-col items-center text-xs font-bold md:px-6 px-2 py-3 transform -rotate-1 hover:rotate-0 transition-transform ">
                Connect Wallet
              </Button>
            </div>
          </div>
        </header>

        {/* Main Banner */}
        <section className="px-4 relative z-50">
          <nav className="md:hidden  flex flex-row items-center space-x-2.5 justify-center ">
            {["Airdrop", "HunterTime", " JagerBNB"].map((item) => (
              <p key={item} className=" cursor-pointer text-[#FF8801] ">
                {item}
              </p>
            ))}
          </nav>
          <div className="max-w-7xl mx-auto flex justify-center">
            <Image
              src="/images/hero.webp"
              alt="hero banner"
              width={1000}
              height={300}
              className="w-full max-w-full h-auto"
            />
          </div>
        </section>

        {/* Main Content */}
        <main className="px-4 md:px-8 py-8 relative z-50">
          <section className=" md:text-start mb-12">
            <div className="max-w-7xl md:mx-auto flex md:justify-start mt-10">
              <Image
                src="/images/what.webp"
                alt="hero banner"
                width={500}
                height={300}
                className=" w-64 max-w-full h-auto"
              />
            </div>
            <div className=" text-[16px] leading-9 mb-6">
              {" "}
              <p className="text-white ">
                {" "}
                <span className="">
                  {" "}
                  A $JAGER is the smallest unit of BNB. 1 $JAGER = 0.00000001
                  BNB{" "}
                </span>{" "}
              </p>{" "}
              <p className="text-white">
                {" "}
                The name $JAGER was proposed by Binances earliest supporters in
                its Telegram group during the exchanges founding days.{" "}
              </p>{" "}
              <p className="text-orange-400 text-wrap ">
                {/* (Reference: https://www.ledger.com ) */}
              </p>{" "}
              <p className="text-green-400 ">
                {" "}
                Inspired by that legacy, the memecoin $JAGER is here.{" "}
              </p>{" "}
              <p className="text-green-400 ">
                {" "}
                No time for more explanation. Before BNB pump to $100K{" "}
              </p>{" "}
              <p className="text-green-400 ">Become a Jager Hunter.</p>{" "}
              <p className="text-green-400 ">Be part of the revolution!</p>{" "}
              <div className="text-green-400 flex flex-row space-x-1.5 ">
                {" "}
                (DYOR.){" "}
                <Image
                  src="/images/hunter.webp"
                  alt="Logo"
                  width={40}
                  height={40}
                />{" "}
              </div>{" "}
            </div>{" "}
          </section>
          <section className="">
            {" "}
            <div className="retro-badge text-black px-8 py-4">
              {" "}
              <Image
                src="/images/about.webp"
                alt="Logo"
                width={200}
                height={100}
              />{" "}
            </div>{" "}
            <div className=" text-[16px] leading-9">
              {" "}
              <div className="text-[#BBC051] flex flex-row sp item-center align-middle ">
                {" "}
                <div className=""> CA:0x748J839D29J2B24</div>{" "}
                <Copy fill="white" className="text-white" />{" "}
              </div>{" "}
              <p className="text-white">
                {" "}
                Total Supply:{" "}
                <span className="text-[#9FF410]">14,600,000,000</span>{" "}
              </p>{" "}
              <p className="text-white">
                {" "}
                ·90.5% allocated for airdrop claims.{" "}
                <span className="text-[#9FF410]">
                  {" "}
                  The claim period for the $JAGER airdrop is only seven
                  days.Unclaimed tokens will be added as $JAGER-BNB LP farming
                  rewards{" "}
                </span>{" "}
              </p>{" "}
              <p className="text-white ">·4% reserved for CEX listing</p>{" "}
              <p className="text-white ">
                {" "}
                ·5.4% dedicated to partnerships, marketing{" "}
              </p>{" "}
              <p className="text-white ">.0.1% Initial liquidity</p>{" "}
              <div className="text-[#FFD100] flex flex-row space-x-2">
                {" "}
                <Image
                  src="/images/hunter.webp"
                  alt="Logo"
                  width={40}
                  height={40}
                />{" "}
                <p> Buy $JAGER</p>{" "}
                <Image
                  src="/images/hunter.webp"
                  alt="Logo"
                  width={40}
                  height={40}
                />{" "}
              </div>{" "}
            </div>{" "}
          </section>
          <section className="mt-10">
            {" "}
            <div className="retro-badge text-black px-8 py-4 inline-block transform rotate-1">
              {" "}
              <Image
                src="/images/roadmap-title.webp"
                alt="Logo"
                width={200}
                height={500}
              />{" "}
            </div>{" "}
            <div className=" grid grid-cols-2 gap-4 mb-12">
              {" "}
              <Image
                src="/images/roadmap.webp"
                alt="Logo"
                width={600}
                height={600}
              />{" "}
              <Image
                src="/images/shooting.png"
                alt="Logo"
                width={500}
                className=" animate-caret-b"
                height={700}
              />{" "}
            </div>{" "}
          </section>
          <section className="mt-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-2 gap-y-3 space-x-2.5">
              {" "}
              <Image
                src="/images/airdrop.webp"
                alt="Logo"
                width={300}
                height={300}
              />{" "}
              <div>
                <p className="text-white text-2xl leading-8">
                  {" "}
                  The $JAGER airdrop period is from May 1, 2025, to May 8, 2025.
                  The $JAGER airdrop claim has ended.{" "}
                </p>
              </div>
            </div>{" "}
            <p className="text-white">
              {" "}
              Check your wallet. If it meets the conditions below, stop fxxking
              overthink it—just claim your airdrop{" "}
            </p>{" "}
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 ">
              {" "}
              <Image
                src="/images/wallet-bsc.webp"
                alt="Logo"
                width={400}
                height={500}
              />{" "}
              <Image
                src="/images/wallet-solana.webp"
                alt="Logo"
                width={400}
                height={500}
              />{" "}
              <Image
                src="/images/wallet-eth.webp"
                alt="Logo"
                width={400}
                height={500}
              />{" "}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-start gap-3 p-4 bg-black/40 rounded-lg"
                >
                  <div className="flex-shrink-0 mt-1">
                    {achievement.completed ? (
                      <div className="w-6 h-6 rounded-full bg-[#FFD100] flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-black" />
                      </div>
                    ) : (
                      <Circle className="w-6 h-6 text-[#FFD100]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      . {achievement.title}
                    </h3>
                    {achievement.description && (
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* token distribtion */}{" "}
          <section className="mt-20">
            {" "}
            <h1 className="text-[#FF8801] mb-11 text-lg">
              {" "}
              $Jager 100% Token Distribution Detail{" "}
            </h1>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
              {" "}
              {/* Pie Chart */}{" "}
              <div>
                {" "}
                <Image
                  src="/images/pie.webp"
                  alt="Logo"
                  width={400}
                  height={500}
                />{" "}
              </div>{" "}
              <div className="space-y-6">
                {" "}
                {/* Part 1 */}{" "}
                <div>
                  {" "}
                  <h3 className="text-green-400 font-semibold text-sm mb-2">
                    {" "}
                    Part 1{" "}
                  </h3>{" "}
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    {" "}
                    Initial Airdrop Phase:{" "}
                    <span className="text-orange-400 font-bold">
                      22.47%
                    </span>{" "}
                    (Airdrop Claim:{" "}
                    <span className="text-orange-400">20.05%</span> + Referral
                    Reward: <span className="text-orange-400">2.42%</span>){" "}
                  </p>{" "}
                  <p className="text-gray-300 text-sm mb-1">
                    {" "}
                    Total Number of Claimed Addresses{" "}
                    <span className="text-orange-400 font-bold">
                      1,465,800
                    </span>{" "}
                  </p>{" "}
                  <p className="text-gray-300 text-sm">
                    {" "}
                    Distribution Completion Date{" "}
                    <span className="text-orange-400 font-bold">
                      {" "}
                      May 1-May 8{" "}
                    </span>{" "}
                  </p>{" "}
                </div>{" "}
                {/* Part 2 */}{" "}
                <div>
                  {" "}
                  <h3 className="text-red-400 font-semibold text-sm mb-2">
                    {" "}
                    Part 2{" "}
                  </h3>{" "}
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    {" "}
                    Initial Liquidity Pool:{" "}
                    <span className="text-orange-400 font-bold">0.1%</span>{" "}
                  </p>{" "}
                  <p className="text-gray-300 text-sm mb-1">
                    {" "}
                    Used to create initial trading pairs on DEX.{" "}
                  </p>{" "}
                  <p className="text-gray-300 text-sm">
                    {" "}
                    Allocation completed{" "}
                    <span className="text-orange-400 font-bold">
                      May 1
                    </span>{" "}
                  </p>{" "}
                </div>{" "}
                {/* Part 3 */}{" "}
                <div>
                  {" "}
                  <h3 className="text-blue-600 font-semibold text-sm mb-2">
                    {" "}
                    Part 3{" "}
                  </h3>{" "}
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    {" "}
                    Fourmeme Joint Airdrop Campaign:{" "}
                    <span className="text-orange-400 font-bold">3.3%</span>{" "}
                    (Airdrop Claim:{" "}
                    <span className="text-orange-400">2.3%</span> + KOL
                    Marketing During Campaign:{" "}
                    <span className="text-orange-400">1%</span>){" "}
                  </p>{" "}
                  <p className="text-gray-300 text-sm mb-1">
                    {" "}
                    Total number of addresses that claimed{" "}
                    <span className="text-orange-400 font-bold">
                      336,789
                    </span>{" "}
                  </p>{" "}
                  <p className="text-gray-300 text-sm">
                    {" "}
                    Allocation completed{" "}
                    <span className="text-orange-400 font-bold">
                      {" "}
                      May 4-May 17{" "}
                    </span>{" "}
                  </p>{" "}
                </div>{" "}
                {/* Part 4 */}{" "}
                <div>
                  {" "}
                  <h3 className="text-orange-600 font-semibold text-sm mb-2">
                    {" "}
                    Part 4{" "}
                  </h3>{" "}
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    {" "}
                    Total allocation for LP mining phase{" "}
                    <span className="text-orange-400 font-bold">
                      68.03%
                    </span>{" "}
                  </p>{" "}
                  <p className="text-gray-300 text-sm mb-1">
                    {" "}
                    Tokens not claimed from the initial airdrop will be
                    automatically allocated here as the main reward for LP
                    mining.{" "}
                  </p>{" "}
                  <p className="text-gray-300 text-sm">
                    {" "}
                    Allocation completed{" "}
                    <span className="text-orange-400 font-bold">
                      {" "}
                      May 8-May 15{" "}
                    </span>{" "}
                  </p>{" "}
                </div>{" "}
                {/* Part 5 */}{" "}
                <div>
                  {" "}
                  <h3 className="text-purple-600 font-semibold text-sm mb-2">
                    {" "}
                    Part 5{" "}
                  </h3>{" "}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {" "}
                    Marketing:{" "}
                    <span className="text-orange-400 font-bold">6.1%</span>{" "}
                    (5.4% reserved allocation + remaining 0.7% from...){" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>
          {/* Tokenomics */}
          {/* <section>
            <div className="mb-12">
              <h1
                className="text-yellow-400 text-4xl md:text-5xl font-bold mb-8 text-center"
                style={{
                  fontFamily: "serif",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Tokenomics
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <div className="relative">
                  <div className="bg-green-600 rounded-lg p-1 mb-4 transform -rotate-1 shadow-lg">
                    <div className="bg-green-500 rounded-lg px-4 py-2">
                      <h2 className="text-yellow-400 text-2xl font-bold text-center">
                        Tax-5%
                      </h2>
                    </div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg border border-green-500/30 p-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-2">
                      This tax is applied to every transaction.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="text-yellow-400 font-semibold">
                        Note:
                      </span>{" "}
                      the tax rate is 10% during the first fourteen days after
                      the project launch.
                    </p>
                  </div>
                </div>
              </div>
            </div> 
          </section> */}
          {/* hunter time */}
          <div className="mb-12  pt-12">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/title.webp"
                alt="Logo"
                width={300}
                height={400}
              />{" "}
            </div>

            <div className=" mb-8">
              <h2 className="text-[#1FF1A0] text-2xl md:text-3xl font-bold mb-2">
                No lock, no stake - just HODL
              </h2>
              <h3 className="text-[#1FF1A0] text-xl md:text-2xl font-bold ">
                Hunters paradise never sleeps
              </h3>
            </div>

            <div className=" p-6 mb-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                Rewards from tax allocations are accumulated every 10 minutes.
                Ensure your wallet balance exceeds{" "}
                <span className="text-yellow-400 font-semibold">
                  146 billion $JAGER
                </span>
              </p>
            </div>

            {/* Rewards Tracking */}
            <div className="grid grid-cols-1 max-w-2xl mx-auto  gap-6">
              <div className="bg-[#110605] backdrop-blur-sm rounded-lg border-4 px-12 border-[#8D4C03] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-white font-bold text-lg">
                    $JAGER total rewards
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                  <span className="text-white text-2xl font-bold">0</span>
                </div>
              </div>

              <div className="bg-[#110605] backdrop-blur-sm rounded-lg border-4 px-12 border-[#8D4C03] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-white font-bold text-lg">
                    $JAGER total rewards
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                  <span className="text-white text-2xl font-bold">0</span>
                </div>
              </div>

              <div className="bg-[#110605] backdrop-blur-sm rounded-lg border-4 px-12 border-[#8D4C03] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-white font-bold text-lg">
                    $JAGER total rewards
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                  <span className="text-white text-2xl font-bold">0</span>
                </div>
              </div>
            </div>
          </div>
          {/* Liquidity Rewards Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/liquid.webp"
                alt="Logo"
                width={400}
                height={400}
              />{" "}
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-0 mb-6 max-w-md">
              <button className="flex-1 bg-[#FF8E00] text-black font-bold py-3 px-6 rounded-l-full border-4 border-[#8D4C03]">
                Pancake V3
              </button>
              <button className="flex-1 bg-black/60 text-gray-300 font-bold py-3 px-6 rounded-r-full  border-[#8D4C03] border-l-0 border-4">
                Pancake V2
              </button>
            </div>

            {/* Main Content Box */}
            <div className="bg-[#110605] backdrop-blur-sm rounded-2xl border-2 border-orange-500 p-6 max-w-2xl">
              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  In addition to earning trading fees from the LP itself, users
                  will also share
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  an extra{" "}
                  <span className="text-orange-400 font-bold text-lg">
                    $100,000
                  </span>{" "}
                  worth of BNB.
                </p>
              </div>

              {/* Event Countdown */}
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm mb-2">Event Countdown</h3>
                <div className="text-white text-2xl font-mono font-bold">
                  00:00:00:00
                </div>
              </div>

              <hr className="border-gray-600 mb-6" />

              {/* Total Value Locked */}
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm mb-2">
                  Total Value Locked (TVL)
                </h3>
                <div className="text-white text-2xl font-bold">$0</div>
              </div>

              {/* Token Balances */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                    <span className="text-orange-400 font-bold">$JAGER</span>
                  </div>
                  <div className="text-white text-xl font-bold">0</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                    <span className="text-orange-400 font-bold">USDT</span>
                  </div>
                  <div className="text-white text-xl font-bold">0</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-[#110605] grid grid-cols-1 mt-3 backdrop-blur-sm h-64  items-center flex-col justify-center px-52 text-center gap-y-3 rounded-2xl border-2 border-orange-500 p-6 max-w-2xl">
              <p className="text-white">
                Stake $JAGER-USD1 on Pancake V3 to earn BNB rewards worth{" "}
                <span className="text-[#1FF1A0]">$100,000</span>!
              </p>
              <Button className=" border-2 bg-[#FF8801] hover:bg-orange-600 text-white flex flex-row items-center text-xs font-bold md:px-6 px-2 py-3 ">
                Go to Pancake <ArrowRight className="text-black" />
              </Button>
            </div>
          </div> */}
          {/* Token Distribution Section */}
          {/* <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4">
            <button className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors flex items-center justify-center shadow-lg">
              <span className="text-black font-bold">🎯</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors flex items-center justify-center shadow-lg">
              <span className="text-black font-bold">⚡</span>
            </button>
          </div> */}
        </main>
      </div>
    </div>
  );
}
