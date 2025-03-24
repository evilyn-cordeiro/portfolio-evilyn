import { useReducer, useState, useMemo, useCallback } from "react";
import { Box, Button, Typography, IconButton, Avatar } from "@mui/material";
import {
  Chat as ChatIcon,
  Close as CloseIcon,
  RestartAlt as RestartIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ChatbotProps {
  currentTheme: any;
}

const predefinedQuestions = [
  "qual-sua-experiencia",
  "como-posso-te-contratar",
  "posso-usar-esse-projeto",
];

const responses: Record<string, string> = {
  "qual-sua-experiencia": "experiencia-bot",
  "como-posso-te-contratar": "contratar-bot",
  "posso-usar-esse-projeto": "usar-projeto-bot",
};

const initialState = {
  messages: [] as { text: string; sender: "user" | "bot"; name: string }[],
};

const chatReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { messages: [...state.messages, action.payload] };
    case "RESET_CHAT":
      return initialState;
    default:
      return state;
  }
};

const Chatbot: React.FC<ChatbotProps> = ({ currentTheme }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const sendMessage = useCallback(
    (userMessage: string) => {
      const formattedMessage = userMessage.toLowerCase();
      const botResponse =
        t(responses[formattedMessage]) || t("desculpe-nao-entendi");

      dispatch({
        type: "ADD_MESSAGE",
        payload: { text: t(userMessage), sender: "user", name: "User" },
      });
      dispatch({
        type: "ADD_MESSAGE",
        payload: { text: botResponse, sender: "bot", name: "Bot" },
      });
    },
    [t]
  );

  const handleQuestionClick = (question: string) => {
    sendMessage(question);
  };

  const resetChat = () => {
    dispatch({ type: "RESET_CHAT" });
  };

  const hasMessages = state.messages.length > 0;

  const renderMessages = useMemo(() => {
    return state.messages.map((msg, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: msg.sender === "user" ? "row-reverse" : "row",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {msg.sender === "bot" && (
          <Avatar
            alt="Bot Avatar"
            src="https://via.placeholder.com/40"
            sx={{
              marginLeft: "10px",
              marginRight: "10px",
              backgroundColor: currentTheme.palette.primary.main,
            }}
          />
        )}
        <Typography
          sx={{
            maxWidth: "80%",
            backgroundColor:
              msg.sender === "user"
                ? currentTheme.palette.primary.light
                : currentTheme.palette.background.default,
            color:
              msg.sender === "user"
                ? currentTheme.palette.primary.contrastText
                : currentTheme.palette.text.primary,
            padding: "8px 12px",
            borderRadius: "15px",
            wordWrap: "break-word",
            fontSize: "1rem",
          }}
        >
          <strong>{msg.name}:</strong> {msg.text}
        </Typography>
        {msg.sender === "user" && (
          <Avatar
            alt="User Avatar"
            src="https://via.placeholder.com/40"
            sx={{
              marginLeft: "10px",
              marginRight: "10px",
              backgroundColor: currentTheme.palette.secondary.main,
            }}
          />
        )}
      </Box>
    ));
  }, [state.messages, currentTheme]);

  return (
    <>
      <IconButton
        aria-label={t("abrir-chat")}
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: currentTheme.palette.primary.main,
          color: currentTheme.palette.primary.contrastText,
          "&:hover": { backgroundColor: currentTheme.palette.primary.dark },
        }}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </IconButton>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "400px",
            maxWidth: "90%",
            zIndex: 999,
            backgroundColor: currentTheme.palette.background.paper,
            border: `1px solid ${currentTheme.palette.divider}`,
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              padding: "1rem",
              flex: 1,
              maxHeight: "350px",
              overflowY: "auto",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ color: currentTheme.palette.text.primary }}
            >
              {t("chatbot")}
            </Typography>
            {renderMessages}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {predefinedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => handleQuestionClick(question)}
                  sx={{
                    textAlign: "left",
                    color: currentTheme.palette.text.primary,
                    backgroundColor: currentTheme.palette.background.default,
                    borderColor: currentTheme.palette.primary.main,
                    "&:hover": {
                      borderColor: currentTheme.palette.primary.dark,
                    },
                  }}
                >
                  {t(question)} 🤖
                </Button>
              ))}
            </Box>
          </Box>

          {hasMessages && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                borderTop: `1px solid ${currentTheme.palette.divider}`,
              }}
            >
              <Button
                startIcon={<RestartIcon />}
                variant="contained"
                color="secondary"
                onClick={resetChat}
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                {t("reset-chat")}
              </Button>
            </Box>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
