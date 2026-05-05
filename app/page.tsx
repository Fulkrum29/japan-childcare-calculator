"use client";

import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("Tokyo");
  const [income, setIncome] = useState("");
  const [children, setChildren] = useState("");
  const [age, setAge] = useState("0");
  const [type, setType] = useState("Daycare");
  const [hours, setHours] = useState("Standard");
  const [result, setResult] = useState("");

  const calculateFees = () => {
    const incomeNumber = Number(income);
    const childAge = Number(age);

    if (childAge >= 3 && childAge <= 5) {
      setResult(
        "FREE\n\nChildren aged 3–5 qualify for Japan’s national childcare subsidy program in most municipalities."
      );
      return;
    }

    let monthlyFee = 0;
    let explanation = "";

    const prefectureAverages: Record<string, number> = {
      Hokkaido: 22000,
      Aomori: 18000,
      Iwate: 18000,
      Miyagi: 21000,
      Akita: 17000,
      Yamagata: 17000,
      Fukushima: 18000,
      Ibaraki: 23000,
      Tochigi: 22000,
      Gunma: 22000,
      "Saitama Prefecture": 26000,
      Chiba: 27000,
      "Tokyo Prefecture": 32000,
      Kanagawa: 30000,
      Niigata: 20000,
      Toyama: 19000,
      Ishikawa: 20000,
      Fukui: 19000,
      Yamanashi: 21000,
      Nagano: 21000,
      Gifu: 22000,
      Shizuoka: 24000,
      Aichi: 28000,
      Mie: 22000,
      Shiga: 23000,
      "Kyoto Prefecture": 26000,
      "Osaka Prefecture": 30000,
      Hyogo: 27000,
      Nara: 23000,
      Wakayama: 20000,
      Tottori: 18000,
      Shimane: 18000,
      Okayama: 22000,
      Hiroshima: 25000,
      Yamaguchi: 21000,
      Tokushima: 19000,
      Kagawa: 20000,
      Ehime: 20000,
      Kochi: 18000,
      "Fukuoka Prefecture": 25000,
      Saga: 18000,
      Nagasaki: 19000,
      Kumamoto: 20000,
      Oita: 19000,
      Miyazaki: 18000,
      Kagoshima: 19000,
      Okinawa: 22000,
    };

    // TOKYO REALISTIC ESTIMATION
if (city === "Tokyo") {

  if (incomeNumber < 2500000) {
    monthlyFee = 8000;
  } else if (incomeNumber < 4000000) {
    monthlyFee = 18000;
  } else if (incomeNumber < 6000000) {
    monthlyFee = 32000;
  } else if (incomeNumber < 8000000) {
    monthlyFee = 48000;
  } else {
    monthlyFee = 62000;
    explanation =
      "Tokyo municipalities commonly apply maximum childcare fee brackets for high-income households.";
  }

  // AGE ADJUSTMENT
  if (childAge <= 1) {
    monthlyFee += 5000;
  }

  explanation +=
    " Estimated using representative Tokyo municipal childcare fee tables.";

}
// OTHER PREFECTURES
else if (prefectureAverages[city]) {

  monthlyFee = prefectureAverages[city];
  explanation = "Estimated using prefecture average data.";

  if (incomeNumber < 3000000) {
    monthlyFee *= 0.7;
  } else if (incomeNumber > 8000000) {
    monthlyFee *= 1.3;
  }

  monthlyFee = Math.round(monthlyFee);

}
// FALLBACK MAJOR CITIES
else {

  if (incomeNumber < 3000000) {
    monthlyFee = 12000;
  } else if (incomeNumber < 6000000) {
    monthlyFee = 28000;
  } else {
    monthlyFee = 57000;

    explanation =
      "This municipality uses a maximum fixed childcare fee for high-income households.";
  }

}

    if (hours === "Extended") {
      monthlyFee += 5000;
    }

    if (Number(children) >= 2) {
      monthlyFee = Math.round(monthlyFee * 0.8);
    }

    const yearlyFee = monthlyFee * 12;

    setResult(
      `Estimated Monthly Fee:\n¥${monthlyFee.toLocaleString()}${monthlyFee >= 57000 ? " (Fixed)" : ""}\n\nEstimated Yearly Fee:\n¥${yearlyFee.toLocaleString()}\n\n${explanation}`
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 text-slate-900">

      <section className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Japan Childcare Cost Calculator
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Estimate daycare and kindergarten fees across Japan instantly.
          </p>
        </div>
      </section>

      <section className="-mt-16 px-6 pb-20">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg rounded-[32px] shadow-2xl border border-white/40 p-8">

          <h2 className="text-3xl font-semibold mb-8 text-center">
            Estimate Your Childcare Costs
          </h2>

          <div className="grid gap-6">

            <div>
              <label className="block mb-2 font-medium">
                City / Prefecture
              </label>

              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 p-4"
              >
                <option>Tokyo</option>
                <option>Osaka</option>
                <option>Yokohama</option>
                <option>Sapporo</option>
                <option>Fukuoka</option>
                <option>Kyoto</option>
                <option>Nagoya</option>
                <option>Kobe</option>
                <option>Saitama</option>

                <option disabled>──────────</option>

                <option>Hokkaido</option>
                <option>Aomori</option>
                <option>Iwate</option>
                <option>Miyagi</option>
                <option>Akita</option>
                <option>Yamagata</option>
                <option>Fukushima</option>
                <option>Ibaraki</option>
                <option>Tochigi</option>
                <option>Gunma</option>
                <option>Saitama Prefecture</option>
                <option>Chiba</option>
                <option>Tokyo Prefecture</option>
                <option>Kanagawa</option>
                <option>Niigata</option>
                <option>Toyama</option>
                <option>Ishikawa</option>
                <option>Fukui</option>
                <option>Yamanashi</option>
                <option>Nagano</option>
                <option>Gifu</option>
                <option>Shizuoka</option>
                <option>Aichi</option>
                <option>Mie</option>
                <option>Shiga</option>
                <option>Kyoto Prefecture</option>
                <option>Osaka Prefecture</option>
                <option>Hyogo</option>
                <option>Nara</option>
                <option>Wakayama</option>
                <option>Tottori</option>
                <option>Shimane</option>
                <option>Okayama</option>
                <option>Hiroshima</option>
                <option>Yamaguchi</option>
                <option>Tokushima</option>
                <option>Kagawa</option>
                <option>Ehime</option>
                <option>Kochi</option>
                <option>Fukuoka Prefecture</option>
                <option>Saga</option>
                <option>Nagasaki</option>
                <option>Kumamoto</option>
                <option>Oita</option>
                <option>Miyazaki</option>
                <option>Kagoshima</option>
                <option>Okinawa</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Annual Household Income (JPY)
              </label>

              <input
                type="number"
                placeholder="Example: 5000000"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Number of Children
              </label>

              <input
                type="number"
                placeholder="1"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Child Age
              </label>

              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 p-4"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Childcare Type
              </label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 p-4"
              >
                <option>Daycare</option>
                <option>Kindergarten</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Care Hours
              </label>

              <select
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 p-4"
              >
                <option>Standard</option>
                <option>Extended</option>
              </select>
            </div>

            <button
              onClick={calculateFees}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 text-white rounded-2xl p-4 text-lg font-semibold"
            >
              Calculate Fees
            </button>

            {result && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 text-lg leading-relaxed shadow-md whitespace-pre-line">
                {result}
              </div>
            )}

            <div className="text-sm text-slate-500 leading-relaxed mt-6 border-t border-slate-200 pt-4">
              Disclaimer: This calculator provides estimated childcare and kindergarten fee approximations based on publicly available municipal, prefectural, and national information in Japan. Actual childcare costs may vary depending on municipality policies, household taxation, subsidy eligibility, child age, family circumstances, facility classification, extended care usage, annual policy revisions, and additional local fees. Results are provided for informational and reference purposes only and should not be considered official financial, legal, or governmental advice. Please consult your local municipality or childcare provider for official fee determinations.
              </div>

          </div>
        </div>

{/* FAQ SECTION */}
<section className="px-6 pb-24">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12">
      Frequently Asked Questions
    </h2>

    <div className="grid gap-6">

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 border border-white/40">
        <h3 className="text-xl font-semibold mb-3">
          Is childcare free in Japan?
        </h3>

        <p className="text-slate-700 leading-relaxed">
          In many municipalities, children aged 3 to 5 qualify for free or heavily subsidized childcare and kindergarten programs under Japan’s national childcare support policies. Additional costs may still apply depending on meals, extended care, and facility type.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 border border-white/40">
        <h3 className="text-xl font-semibold mb-3">
          How are daycare fees calculated in Japan?
        </h3>

        <p className="text-slate-700 leading-relaxed">
          Childcare fees in Japan are commonly determined based on household income, municipal resident tax brackets, child age, number of children in the household, and the type of certified childcare facility.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 border border-white/40">
        <h3 className="text-xl font-semibold mb-3">
          Are childcare fees different by city?
        </h3>

        <p className="text-slate-700 leading-relaxed">
          Yes. Municipalities and prefectures often apply different fee schedules, subsidy programs, and extended care charges. Costs in Tokyo and other large cities are usually higher than rural areas.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 border border-white/40">
        <h3 className="text-xl font-semibold mb-3">
          What is the difference between Hoikuen and Yochien?
        </h3>

        <p className="text-slate-700 leading-relaxed">
          Hoikuen are daycare centers primarily designed for working families and longer childcare hours, while Yochien are kindergartens focused more on early childhood education with shorter schedules.
        </p>
      </div>

    </div>
  </div>
</section>

      </section>
    </main>
  );
}