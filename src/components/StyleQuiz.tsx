import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Sparkles, ChevronRight, ChevronLeft, Copy } from "lucide-react";
import { toast } from "sonner";

const quizQuestions = [
  {
    id: 1,
    question: "What's your car style?",
    options: [
      "Luxury (BMW, Mercedes, Audi)",
      "Sport (WRX, Type R, M-Series)",
      "Truck/SUV (F-150, Wrangler)",
      "Classic/Vintage"
    ]
  },
  {
    id: 2,
    question: "Pick your vibe:",
    options: [
      "Elegant & Refined",
      "Aggressive & Bold",
      "Minimal & Clean",
      "Eye-catching & Unique"
    ]
  },
  {
    id: 3,
    question: "Preferred material feel:",
    options: [
      "Smooth matte",
      "Glossy shine",
      "Leather texture",
      "Metallic finish"
    ]
  },
  {
    id: 4,
    question: "What will you customize with?",
    options: [
      "My car photo",
      "My face/portrait",
      "License plate text",
      "Just the rim design"
    ]
  }
];

const getRecommendation = (answers: string[]) => {
  // Simple recommendation logic based on answers
  if (answers[0]?.includes("Luxury") || answers[1]?.includes("Elegant")) {
    return {
      rims: ["Classic Chrome", "Luxury Gold"],
      material: "Glossy",
      description: "Your sophisticated taste deserves our premium luxury collection"
    };
  } else if (answers[0]?.includes("Sport") || answers[1]?.includes("Aggressive")) {
    return {
      rims: ["Carbon Pro", "Sport GT Black"],
      material: "Matte",
      description: "Performance-inspired designs that match your sporty edge"
    };
  } else if (answers[0]?.includes("Truck") || answers[1]?.includes("Bold")) {
    return {
      rims: ["Matte Gunmetal", "Rally Red"],
      material: "Matte",
      description: "Rugged and bold styles built for adventure"
    };
  } else {
    return {
      rims: ["Diamond Cut", "Street Drift"],
      material: "Metallic",
      description: "Unique designs that showcase your individual style"
    };
  }
};

const StyleQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleNext = () => {
    if (!selectedAnswer) {
      toast.error("Please select an option");
      return;
    }

    const newAnswers = [...answers];
    newAnswers[currentStep] = selectedAnswer;
    setAnswers(newAnswers);
    setSelectedAnswer("");

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const result = getRecommendation(newAnswers);
      setRecommendation(result);
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedAnswer(answers[currentStep - 1] || "");
    }
  };

  const copyDiscountCode = () => {
    navigator.clipboard.writeText("QUIZ10");
    toast.success("Discount code copied! Use QUIZ10 at checkout");
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setSelectedAnswer("");
    setShowResults(false);
    setRecommendation(null);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetQuiz();
    }
  };

  return (
    <>
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center bg-card/50 backdrop-blur rounded-2xl p-12 border border-border/40 shadow-card hover:shadow-premium transition-premium animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow animate-scale-in">
              <Sparkles className="h-10 w-10 text-white animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Not Sure Which Rim Style Fits You?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Take our 60-second quiz for personalized recommendations
            </p>

            <Button
              size="lg"
              className="bg-gradient-accent hover:shadow-glow hover:scale-105 transition-premium font-semibold group"
              onClick={() => setIsOpen(true)}
            >
              Start Quiz
              <ChevronRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-poppins">
              {showResults ? "Your Perfect Match!" : "Style Quiz"}
            </DialogTitle>
          </DialogHeader>

          {!showResults ? (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Question {currentStep + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(((currentStep + 1) / quizQuestions.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-accent transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-poppins">
                  {quizQuestions[currentStep].question}
                </h3>

                <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                  {quizQuestions[currentStep].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border/40 hover:bg-secondary/10 transition-smooth cursor-pointer">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="border-secondary/30"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-gradient-accent hover:shadow-glow transition-smooth"
                >
                  {currentStep === quizQuestions.length - 1 ? "See Results" : "Next"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-4xl">✨</div>
                <h3 className="text-xl font-semibold font-poppins">
                  {recommendation?.description}
                </h3>
                <p className="text-muted-foreground">
                  Based on your answers, we recommend:
                </p>
              </div>

              {/* Recommendations */}
              <div className="grid md:grid-cols-2 gap-4">
                {recommendation?.rims.map((rim: string, index: number) => (
                  <div key={index} className="bg-gradient-metallic rounded-lg p-6 text-center border border-border/40">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-card flex items-center justify-center">
                      <Sparkles className="h-12 w-12 text-primary" />
                    </div>
                    <h4 className="font-semibold font-poppins mb-2">{rim}</h4>
                    <p className="text-sm text-muted-foreground">
                      {recommendation?.material} finish
                    </p>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="bg-gradient-accent rounded-lg p-6 text-center text-white">
                <p className="text-sm mb-2">Your exclusive discount code:</p>
                <div className="flex items-center justify-center gap-3">
                  <code className="text-2xl font-bold font-mono">QUIZ10</code>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/20 border-white/30 hover:bg-white/30 text-white"
                    onClick={copyDiscountCode}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm mt-2 text-white/80">10% off your first order</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 bg-gradient-accent hover:shadow-glow transition-smooth"
                  onClick={() => window.location.href = '/customize'}
                >
                  Customize This Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-secondary/30"
                  onClick={resetQuiz}
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StyleQuiz;
